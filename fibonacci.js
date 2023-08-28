let createFib = function(target) {
    let base = [0,1,1]
    function FibR(target) {
        let add = base[base.length - 2] + base[base.length-1];
                debugger;
        base.push(add);
        target--;
        if(target <= 0) {
            return
        }
        FibR(target);
        
    }
    if(target !== undefined) {
        FibR(target)
    }
    return base
}
