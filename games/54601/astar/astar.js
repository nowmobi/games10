!function (t) {
  var n = function () {
    function pathTo(t) {
      for (var n = t, i = []; n.parent;) {
        i.unshift(n);
        n = n.parent;
      }
      return i;
    }
    var t = {
      search: function (n, i, o, r) {
        n.cleanDirty();
        var e = (r = r || {}).heuristic || t.heuristics.manhattan;
        var s = r.closest || !1;
        var h = new BinaryHeap(function (t) {
          return t.f;
        });
        var a = i;
        i.h = e(i, o);
        n.markDirty(i);
        h.push(i);
        for (; h.size() > 0;) {
          var c = h.pop();
          if (c === o) {
            return pathTo(c);
          }
          c.closed = !0;
          for (var u = n.neighbors(c), p = 0, d = u.length; p < d; ++p) {
            var f = u[p];
            if (!f.closed && !f.isWall()) {
              var l = c.g + f.getCost(c);
              var g = f.visited;
              (!g || l < f.g) && (f.visited = !0, f.parent = c, f.h = f.h || e(f, o), f.g = l, f.f = f.g + f.h, n.markDirty(f), s && (f.h < a.h || f.h === a.h && f.g < a.g) && (a = f), g ? h.rescoreElement(f) : h.push(f));
            }
          }
        }
        return s ? pathTo(a) : [];
      },
      heuristics: {
        manhattan: function (t, n) {
          var i = Math.abs(n.x - t.x);
          var o = Math.abs(n.y - t.y);
          return i + o;
        },
        diagonal: function (t, n) {
          var i = Math.sqrt(2);
          var o = Math.abs(n.x - t.x);
          var r = Math.abs(n.y - t.y);
          return 1 * (o + r) + (i - 2) * Math.min(o, r);
        }
      },
      cleanNode: function (t) {
        t.f = 0;
        t.g = 0;
        t.h = 0;
        t.visited = !1;
        t.closed = !1;
        t.parent = null;
      }
    };
    function Graph(t, n) {
      n = n || {};
      this.nodes = [];
      this.diagonal = !!n.diagonal;
      this.grid = [];
      for (var i = 0; i < t.length; i++) {
        this.grid[i] = [];
        for (var o = 0, r = t[i]; o < r.length; o++) {
          var e = new GridNode(i, o, r[o] ? 1 : 100);
          this.grid[i][o] = e;
          this.nodes.push(e);
        }
      }
      this.init();
    }
    function GridNode(t, n, i) {
      this.x = t;
      this.y = n;
      this.weight = i;
    }
    function BinaryHeap(t) {
      this.content = [];
      this.scoreFunction = t;
    }
    Graph.prototype.init = function () {
      this.dirtyNodes = [];
      for (var n = 0; n < this.nodes.length; n++) {
        t.cleanNode(this.nodes[n]);
      }
    };
    Graph.prototype.cleanDirty = function () {
      for (var n = 0; n < this.dirtyNodes.length; n++) {
        t.cleanNode(this.dirtyNodes[n]);
      }
      this.dirtyNodes = [];
    };
    Graph.prototype.markDirty = function (t) {
      this.dirtyNodes.push(t);
    };
    Graph.prototype.neighbors = function (t) {
      var n = [];
      var i = t.x;
      var o = t.y;
      var r = this.grid;
      r[i - 1] && r[i - 1][o] && n.push(r[i - 1][o]);
      r[i + 1] && r[i + 1][o] && n.push(r[i + 1][o]);
      r[i] && r[i][o - 1] && n.push(r[i][o - 1]);
      r[i] && r[i][o + 1] && n.push(r[i][o + 1]);
      this.diagonal && (r[i - 1] && r[i - 1][o - 1] && n.push(r[i - 1][o - 1]), r[i + 1] && r[i + 1][o - 1] && n.push(r[i + 1][o - 1]), r[i - 1] && r[i - 1][o + 1] && n.push(r[i - 1][o + 1]), r[i + 1] && r[i + 1][o + 1] && n.push(r[i + 1][o + 1]));
      return n;
    };
    Graph.prototype.toString = function () {
      for (var t = [], n = this.grid, i = 0; i < n.length; i++) {
        for (var o = [], r = n[i], e = 0; e < r.length; e++) {
          o.push(r[e].weight);
        }
        t.push(o.join(" "));
      }
      return t.join("\n");
    };
    GridNode.prototype.toString = function () {
      return "[" + this.x + " " + this.y + "]";
    };
    GridNode.prototype.getCost = function (t) {
      let n = this.weight;
      return t && t.x != this.x && t.y != this.y ? 1.41421 * n : n;
    };
    GridNode.prototype.isWall = function () {
      return 0 === this.weight;
    };
    BinaryHeap.prototype = {
      push: function (t) {
        this.content.push(t);
        this.sinkDown(this.content.length - 1);
      },
      pop: function () {
        var t = this.content[0];
        var n = this.content.pop();
        this.content.length > 0 && (this.content[0] = n, this.bubbleUp(0));
        return t;
      },
      remove: function (t) {
        var n = this.content.indexOf(t);
        var i = this.content.pop();
        n !== this.content.length - 1 && (this.content[n] = i, this.scoreFunction(i) < this.scoreFunction(t) ? this.sinkDown(n) : this.bubbleUp(n));
      },
      size: function () {
        return this.content.length;
      },
      rescoreElement: function (t) {
        this.sinkDown(this.content.indexOf(t));
      },
      sinkDown: function (t) {
        for (var n = this.content[t]; t > 0;) {
          var i = (t + 1 >> 1) - 1;
          var o = this.content[i];
          if (!(this.scoreFunction(n) < this.scoreFunction(o))) {
            break;
          }
          this.content[i] = n;
          this.content[t] = o;
          t = i;
        }
      },
      bubbleUp: function (t) {
        for (var n = this.content.length, i = this.content[t], o = this.scoreFunction(i);;) {
          var r;
          var e = t + 1 << 1;
          var s = e - 1;
          var h = null;
          if (s < n) {
            var a = this.content[s];
            (r = this.scoreFunction(a)) < o && (h = s);
          }
          if (e < n) {
            var c = this.content[e];
            this.scoreFunction(c) < (null === h ? o : r) && (h = e);
          }
          if (null === h) {
            break;
          }
          this.content[t] = this.content[h];
          this.content[h] = i;
          t = h;
        }
      }
    };
    return {
      astar: t,
      Graph: Graph
    };
  }();
  var i = "undefined" != typeof window ? window : global;
  i.AstarPathFind = i.AstarPathFind || {};
  i.AstarPathFind.astar = n.astar;
  i.AstarPathFind.Graph = n.Graph;
}();