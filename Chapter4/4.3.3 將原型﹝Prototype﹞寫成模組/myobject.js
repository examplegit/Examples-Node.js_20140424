var MyObject = module.exports = function() {
    this.count = 0;
};

MyObject.prototype.touch = function() {
    this.count++;
}
