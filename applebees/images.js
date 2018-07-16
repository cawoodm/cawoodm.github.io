var Images = {
    get: {},
    loaded: 0,
    imageCount: 0,
    onloadCallBack: null,
    checkLoaded: function() {
        Images.loaded++;
        if (Images.loaded == Images.imageCount && typeof Images.onloadCallBack == "function") Images.onloadCallBack();
    },
    add: function(name, src) {
        let img = new Image();
        img.src = src;
        let that=this;
        img.onload = this.checkLoaded;
        this.get[name]=img;
        this.imageCount++;
    },
    onload: function(fcn) {
        this.onloadCallBack=fcn;
    }
}