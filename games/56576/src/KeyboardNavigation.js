var KeyboardNavigation = (function () {

    function KeyboardNavigation() {
        this._elementsGrid = [];
        this._selectedItem = null;
        this._selectedRowIndex = 0;
        this._selectedColIndex = 0;
    }

    KeyboardNavigation.prototype.addRow = function (elementsArray) {

        var sorted = elementsArray.sort(function (a, b) {
            return a.x - b.x;
        });
        this._elementsGrid.push(sorted);
    }

    KeyboardNavigation.prototype.setSelectedItem = function (item) {

        for (var i = 0; i < this._elementsGrid.length; i++) {
            for (var j = 0; j < this._elementsGrid[i].length; j++) {
                if (this._elementsGrid[i][j] == item) {

                    this._selectedRowIndex = i;
                    this._selectedColIndex = j;
                    this._selectedItem = item;

                    return;
                }
            }
        }
    }

    KeyboardNavigation.prototype.getSelectedItem = function () {

        BasicGame.gameon = true;
        return this._selectedItem;
    }

    KeyboardNavigation.prototype.up = function () {


        if (this._selectedRowIndex == 0) {
        } else {
            this._selectedRowIndex--;
            if (this._selectedRowIndex < 0) {
                this._selectedRowIndex = this._elementsGrid.length - 1;
            }
            this._selectedItem = this._elementsGrid[this._selectedRowIndex][this._selectedColIndex];
            //var s = this._getNearbyObjectByAxis(this._elementsGrid[this._selectedRowIndex], this._selectedItem, "x");
            // this.setSelectedItem(s);
            //	console.log(this._elementsGrid[this._selectedRowIndex]+" up		"+s);
        }
    }

    KeyboardNavigation.prototype.down = function () {

        var sd = this._selectedRowIndex;
        this._selectedRowIndex++;

        if (this._selectedRowIndex > this._elementsGrid.length - 1) {
            this._selectedRowIndex = this._elementsGrid.length - 1;
        }
        if (this._selectedRowIndex == sd) {
            return
        }

        var s = this._getNearbyObjectByAxis(this._elementsGrid[this._selectedRowIndex], this._selectedItem, "x");
        this.setSelectedItem(s);
    }

    KeyboardNavigation.prototype.left = function () {

        if (this._elementsGrid[this._selectedRowIndex].length < 2) {
            return;
        }
        this._selectedColIndex--;
        if (this._selectedColIndex < 0) {
            this._selectedColIndex = this._elementsGrid[this._selectedRowIndex].length - 1;
        }
        this._selectedItem = this._elementsGrid[this._selectedRowIndex][this._selectedColIndex];
    }

    KeyboardNavigation.prototype.right = function () {

        if (this._elementsGrid[this._selectedRowIndex].length < 2) {
            return;
        }
        this._selectedColIndex++;
        if (this._selectedColIndex > this._elementsGrid[this._selectedRowIndex].length - 1) {
            this._selectedColIndex = 0;
        }
        this._selectedItem = this._elementsGrid[this._selectedRowIndex][this._selectedColIndex];
    }

    KeyboardNavigation.prototype._getNearbyObjectByAxis = function (array, element, axis) {

        var lastEl = null;
        var lastDiff = Infinity;
        array.filter(function (e) {
            return e !== element;
        }).forEach(e => {
            var diff = Math.abs(e[axis] - element[axis]);
            if (lastDiff > diff) {
                lastDiff = diff;
                lastEl = e;
            }
        });

        return lastEl;
    }


    return KeyboardNavigation;

}());