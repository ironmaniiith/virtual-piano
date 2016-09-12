function PlaySong(sequence, index, duration, subduration) {
    if (!(this instanceof PlaySong)) {
        return new PlaySong(sequence, index, duration, subduration);
    } else {
        this.sequence = sequence;
        this.index = index;
        this.duration = duration;
        this.subduration = subduration || duration / 3.5;
        this.enabled = true;
        setTimeout(player(this), 0);
        return this;
    }
}

function player(song) {
    var index = song.index,
        sequence = song.sequence,
        duration = song.duration,
        subduration = song.subduration;
    if (!song.enabled) {
        return;
    }

    var val = sequence[index];
    if (val !== undefined) {
        setTimeout(function(){
            var length = val.length;
            for (var i = 0; i < length; i++) {
                (function(j){
                    setTimeout(function() {
                        play(val[j]);
                    }, subduration * j);
                })(i);
            }
            ++song.index;
            player(song);
        }, duration);
    }
    return;
}

/** Example
var titanic = ['t','y','y8u', ' 0','w','','i','u','y','t','5y','9','wo','','','','i','u','4t','','','8','q  e','','e','','5 w','9','w','e','r',
'','t','y','y','8u','','w','','t','i','u','y','t','5y','9','wo',' ','','','u','o','4p','','8','q','','','o','u','5y','9','w',
'','p','a','','','6s','0','t','0','','',' ra','o','5y','9','w','9','ei','9','o','o','4p','','','8','q','8','wo','8','eu','5y','9','w','9','e','9','r',
'6','0t','es','0s','e','0o','et','0','','5','9t','ws','9s','w','9o','wt','9','','4','8t','qs','8s','q','8o','qt','8','  5','9t','ws',
'9','ets','9','ra','9','u','6s','0t','es','0s','e','0o','et','0','','5','9t','ws','9s','w','9o','wd','9','4','8t','qs','8s','q',
'8o','qt','','8','5','9t','ws','','9','ets','9','ra',
'1ts','8','0','wt','t','0','wt','0','5r','9','wt','9','w','9','wr','9','4r','8','qt','8','q','8','qy','8','8u','w','r','w','5y','',
'9','w','t','','1t','8','0','wt','t','0','wt','0','5r','9','wt','9','w','9','wt','0y','4w','8','q','8','q','8','q','8','4q','8w','qe',
't','i','o','p','a','1ts','0','w','ts','ts','0','wts','0','5ra','9','wts','9','w','9','wra','9','4ra','8','qts','8','q','8',
'qyd','8','uf','   w','r','w','5yd','9','w','','','  1ts','8','0','wts','ts','0','wts','0','5ra','9','wts','9','w','9','wts','9yd',
' 4o','8','q','8','q','8','q','8','4wo','8','q','8','3ep','7','9ra','7','6ts','0','e','0','r','0','ets','0','5yd','9','w','9','5wo','','',
'w','4oh','8','q','8','qig','8','euf','8','5yd','9','  w','9','euf','9','rig','9','6uf','0','t','0','ryd','0','ets','0',
'5ra','9','wts','9','e','9','r','ra','4ep','8','q','8','w','8','q','8','3wo','7','0','7','2qi','6','9','','6ts','0','e','0','r','0','ets',
'0','5yd','9','w','9','5wow','','','9oh','4oh','8','q','8','qig','8','euf','8','5yd','9','w','9','euf','9','rig','9','6uf','0',
't','0','ryd','0','ets','0','5ra','9','e','9','r','','ra','','   4ra','8','q','wts','8','q','eyd','8','5uf','9','w','9','eyd','9',
'r','','s','d','6f','0','e','0','r','','g','f','d','s','5d','9','wh','9','e','9','','g','f','4s','8','qp','8','w','8','p','8','5o','9','w','e','r','','s',
'd','d','8f','w','t','w','y','w','','g','f','d','s','5d','9','wh','9','e','','9ff','h','4j','8','q','8','   wh','8','ef','5d','9','','w','9','ep','','a',
'6s','0','t','0','ra','o','5y','9','w','9','ep','','a','6s','0','t','0','ra','o','','5y','  9','w','9','','ei','9','o','o','4p','8','q','8','wo','8','eu','5y','9','w','9','e','9','r','6','0t','es','0s',
'e','0o','et','0','5','9t','ws','9s','w','9o','wt','9','4','8t','qs','8s','q','8o','qt','8','5','9t','ws','9','ets','9','ra','9','u',
'ets','9','ra','1ts','8','w','t','u','i','o','s','f','g','h','l','x','c','v','c','mty'];
var a = PlaySong(titanic, 0, 362, 30);

*/