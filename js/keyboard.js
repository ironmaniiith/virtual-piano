document.onkeydown = function (n) {
    var t = window.event ? n.keyCode : n.which;
    n.shiftKey ? notes.b_c.indexOf(t) != -1 && piano.music("b" + t, 3) : notes.w_c.indexOf(t) != -1 && piano.music("a" + t, 1)
};
document.onmouseup = function () {
    piano.isMouseDown = !1
};
document.getElementById("piano").onmousedown = function () {
    piano.isMouseDown = !0
};

var lookup = {};
for (var i = 0; i < 300; i++) {
    lookup[String.fromCharCode(i)] = i;
}

function getKeyCode(c) {
    return lookup[c];
}

function isShiftKeyEnabled(c) {
    return notes.b_n.indexOf(c) !== -1;
}

function play(c) {
    var n = {};
    n.shiftKey = false;
    var pos = notes.b_n.indexOf(c);
    if (pos !== -1) {
        var val = notes.b_n_[pos];
        n.keyCode = getKeyCode(val.toUpperCase());
    } else {
        n.keyCode = getKeyCode(c.toUpperCase());
    }
    if (isShiftKeyEnabled(c)) {
        n.shiftKey = true;
    }
    var t = n.keyCode;
    n.shiftKey ? notes.b_c.indexOf(t) != -1 && piano.music("b" + t, 3) : notes.w_c.indexOf(t) != -1 && piano.music("a" + t, 1)
}


function pair(c, dir, step) {
    var i;
    dir = dir || 1;
    step = step || 1;
    var conjugate = ((i = notes.w_n.indexOf(c)) !== -1) ? notes.w_n[i + 7*dir*step] : ((i = notes.b_n.indexOf(c) !== -1) && notes.b_n[i + 5*dir* step]);
    if (conjugate === false) conjugate = undefined;
    return conjugate;
}

function two(c, dir) {
    dir = dir || 1;
    if (dir === -1) {
        return pair(c, dir) + c;
    } else if (dir === 1) {
        return c + pair(c, dir);
    }
}

function three(c) {
    return pair(c, -1) + c + pair(c, 1);
}
