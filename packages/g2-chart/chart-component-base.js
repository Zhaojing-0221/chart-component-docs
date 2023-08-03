import './style.css';
var so = Object.defineProperty;
var lo = (e, t, r) => t in e ? so(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var nt = (e, t, r) => (lo(e, typeof t != "symbol" ? t + "" : t, r), r);
import { defineComponent as kt, ref as L, nextTick as re, watch as wt, openBlock as ot, createElementBlock as st, withModifiers as mi, normalizeClass as uo, createVNode as Ve, computed as Dt, unref as yt, createElementVNode as J, normalizeStyle as Gt, toDisplayString as Le, onBeforeUnmount as co, createCommentVNode as fo, pushScopeId as ho, popScopeId as mo } from "vue";
import { Chart as ve, registerShape as Qt, registerAction as go, registerInteraction as po } from "@antv/g2";
const le = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgc3R5bGU9ImJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwKTtib3JkZXItd2lkdGg6IGJweDtib3JkZXItc3R5bGU6IHVuZGVmaW5lZCIgZmlsdGVyPSJub25lIj4NCiAgICANCiAgICA8Zz4NCiAgICA8cGF0aCBkPSJNODU4LjkgNjg5TDUzMC41IDMwOC4yYy05LjQtMTAuOS0yNy41LTEwLjktMzcgMEwxNjUuMSA2ODljLTEyLjIgMTQuMi0xLjIgMzUgMTguNSAzNWg2NTYuOGMxOS43IDAgMzAuNy0yMC44IDE4LjUtMzV6IiBmaWxsPSJyZ2JhKDEzMy4xMSwxMTYuMDI1LDI0My4wMTUsMSkiPjwvcGF0aD4NCiAgICA8L2c+DQogIDwvc3ZnPg==", ue = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBmaWxsPSJub25lIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij48ZGVmcz48Y2xpcFBhdGggaWQ9Im1hc3Rlcl9zdmcwXzcxXzI2MTcxIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHJ4PSIwIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI21hc3Rlcl9zdmcwXzcxXzI2MTcxKSI+PGc+PGc+PHBhdGggZD0iTTExLjc0Mjc3NDAxOTkyNzk3OCw5LjQxOTkyMzkxNTQwNTI3NEw3LjI1MjkzNDAxOTkyNzk3OCw0LjIxMzY3MTkxNTQwNTI3M0M3LjEyNDQxNDAxOTkyNzk3OCw0LjA2NDY0ODExNTQwNTI3NCw2Ljg3Njk1NDAxOTkyNzk3OSw0LjA2NDY0ODExNTQwNTI3NCw2Ljc0NzA3NDAxOTkyNzk3OSw0LjIxMzY3MTkxNTQwNTI3M0wyLjI1NzIyNjQxOTkyNzk3ODMsOS40MTk5MjM5MTU0MDUyNzRDMi4wOTA0Mjk1MTk5Mjc5NzgzLDkuNjE0MDYzOTE1NDA1MjczLDIuMjQwODIwMTE5OTI3OTc4NSw5Ljg5ODQzMzkxNTQwNTI3NCwyLjUxMDE1NjAxOTkyNzk3ODcsOS44OTg0MzM5MTU0MDUyNzRMMTEuNDg5ODQ0MDE5OTI3OTc5LDkuODk4NDMzOTE1NDA1Mjc0QzExLjc1OTE3NDAxOTkyNzk3OSw5Ljg5ODQzMzkxNTQwNTI3NCwxMS45MDk1NzQwMTk5Mjc5NzgsOS42MTQwNjM5MTU0MDUyNzMsMTEuNzQyNzc0MDE5OTI3OTc4LDkuNDE5OTIzOTE1NDA1Mjc0WiIgZmlsbD0iI0ZGQjA2NSIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjwvZz48L2c+PC9zdmc+", Ht = function(e) {
  const { min: t, values: r, tickCount: n } = e;
  let i = Math.max(...r), a = (i - t) / n;
  a = Math.ceil(a);
  const o = Math.pow(10, a.toString().length - 2);
  if (a = Math.ceil(a / o) * o, i === 0 && t === 0)
    return e.max = 1, [0, 1];
  if (i < -Number.MAX_VALUE)
    return [""];
  i = a * n;
  const s = [], l = a.toString().split(".")[1] ? a.toString().split(".")[1].length : 0;
  for (let u = t; u < i; u += a)
    s.push(u.toFixed(l));
  return s.push(i.toFixed(l)), e.max = i, s;
}, yo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAACQCAYAAACI23zQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA2LTEzVDE0OjM3OjM5KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wNi0xNFQxMToyNzoyMyswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wNi0xNFQxMToyNzoyMyswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplODk5OWRhYS1iMzljLTAxNDktOTY0OC1lMjRkNmQxNGJjZjAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1NTA5MDEwNS05YTY3LWI3NDUtYmJiMS0xMjI1NDA2NTU5OTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4MzI0ZWRjNS1iNTA5LWM0NGMtYmQ1Ny0yYmM1ZDY3ZjU4M2IiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjgzMjRlZGM1LWI1MDktYzQ0Yy1iZDU3LTJiYzVkNjdmNTgzYiIgc3RFdnQ6d2hlbj0iMjAyMy0wNi0xM1QxNDozNzozOSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplOTE1NTJiMS00NzQzLWU3NGMtYTY5ZC1kZmExOGZlMDNlNzciIHN0RXZ0OndoZW49IjIwMjMtMDYtMTRUMTE6Mjc6MjMrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZTg5OTlkYWEtYjM5Yy0wMTQ5LTk2NDgtZTI0ZDZkMTRiY2YwIiBzdEV2dDp3aGVuPSIyMDIzLTA2LTE0VDExOjI3OjIzKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wqTbEgAACYlJREFU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", vo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAACQCAYAAACI23zQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGvmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA2LTEzVDE0OjM3OjM5KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wNi0xNFQxMToyNzoxNCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wNi0xNFQxMToyNzoxNCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxM2JiMWI2Ny1iY2U3LTI0NDMtOWU1MC01NDBmOWUzNjZmMzgiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphZWY2N2M3NC1iZGNhLTg2NGYtOTBjZi01MzI3NzNhOGZhNjgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4MzI0ZWRjNS1iNTA5LWM0NGMtYmQ1Ny0yYmM1ZDY3ZjU4M2IiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjgzMjRlZGM1LWI1MDktYzQ0Yy1iZDU3LTJiYzVkNjdmNTgzYiIgc3RFdnQ6d2hlbj0iMjAyMy0wNi0xM1QxNDozNzozOSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyY2UzNWE4Ni0zYWFhLWQ1NDEtOWMzMi1kNmY2ZjY1YjkxZTgiIHN0RXZ0OndoZW49IjIwMjMtMDYtMTRUMTE6Mjc6MTQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTNiYjFiNjctYmNlNy0yNDQzLTllNTAtNTQwZjllMzY2ZjM4IiBzdEV2dDp3aGVuPSIyMDIzLTA2LTE0VDExOjI3OjE0KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+gMgJIgAACYpJREFU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", bo = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBmaWxsPSJub25lIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEwIDE2Ij48Zz48Zz48cGF0aCBkPSJNMywxNkw2LjMzMzMzLDE2TDEwLDhMNi4zMzMzMywwTDMsMEw2LjY2NjY3LDhMMywxNloiIGZpbGw9IiNFMzUxMjMiIGZpbGwtb3BhY2l0eT0iMSIvPjwvZz48Zz48cGF0aCBkPSJNMCwxNkwwLjY2NjY2NywxNkw0LjMzMzMzLDhMMC42NjY2NjcsMEwwLDBMMCw4TDAsMTZaIiBmaWxsPSIjRTM1MTIzIiBmaWxsLW9wYWNpdHk9IjEiLz48L2c+PC9nPjwvc3ZnPg==", wo = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBmaWxsPSJub25lIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEwIDE2Ij48Zz48Zz48cGF0aCBkPSJNMywwTDYuNjY2NjcsOEwzLDE2TDYuMzMzMzMsMTZMMTAsOEw2LjMzMzMzLDBMMywwWiIgZmlsbD0iI0ZGQjA2NSIgZmlsbC1vcGFjaXR5PSIxIi8+PC9nPjxnPjxwYXRoIGQ9Ik0wLDE2TDAuNjY2NjY3LDE2TDQuMzMzMzMsOEwwLjY2NjY2NywwTDAsMEwwLDhMMCwxNloiIGZpbGw9IiNGRkIwNjUiIGZpbGwtb3BhY2l0eT0iMSIvPjwvZz48L2c+PC9zdmc+";
class ne extends Error {
}
class xo extends ne {
  constructor(t) {
    super(`Invalid DateTime: ${t.toMessage()}`);
  }
}
class So extends ne {
  constructor(t) {
    super(`Invalid Interval: ${t.toMessage()}`);
  }
}
class Ao extends ne {
  constructor(t) {
    super(`Invalid Duration: ${t.toMessage()}`);
  }
}
class Ee extends ne {
}
class gi extends ne {
  constructor(t) {
    super(`Invalid unit ${t}`);
  }
}
class pt extends ne {
}
class Bt extends ne {
  constructor() {
    super("Zone is an abstract class");
  }
}
const x = "numeric", It = "short", ft = "long", Zr = {
  year: x,
  month: x,
  day: x
}, pi = {
  year: x,
  month: It,
  day: x
}, To = {
  year: x,
  month: It,
  day: x,
  weekday: It
}, yi = {
  year: x,
  month: ft,
  day: x
}, vi = {
  year: x,
  month: ft,
  day: x,
  weekday: ft
}, bi = {
  hour: x,
  minute: x
}, wi = {
  hour: x,
  minute: x,
  second: x
}, xi = {
  hour: x,
  minute: x,
  second: x,
  timeZoneName: It
}, Si = {
  hour: x,
  minute: x,
  second: x,
  timeZoneName: ft
}, Ai = {
  hour: x,
  minute: x,
  hourCycle: "h23"
}, Ti = {
  hour: x,
  minute: x,
  second: x,
  hourCycle: "h23"
}, Oi = {
  hour: x,
  minute: x,
  second: x,
  hourCycle: "h23",
  timeZoneName: It
}, Mi = {
  hour: x,
  minute: x,
  second: x,
  hourCycle: "h23",
  timeZoneName: ft
}, Ii = {
  year: x,
  month: x,
  day: x,
  hour: x,
  minute: x
}, ki = {
  year: x,
  month: x,
  day: x,
  hour: x,
  minute: x,
  second: x
}, Ni = {
  year: x,
  month: It,
  day: x,
  hour: x,
  minute: x
}, Ci = {
  year: x,
  month: It,
  day: x,
  hour: x,
  minute: x,
  second: x
}, Oo = {
  year: x,
  month: It,
  day: x,
  weekday: It,
  hour: x,
  minute: x
}, Fi = {
  year: x,
  month: ft,
  day: x,
  hour: x,
  minute: x,
  timeZoneName: It
}, Ei = {
  year: x,
  month: ft,
  day: x,
  hour: x,
  minute: x,
  second: x,
  timeZoneName: It
}, Di = {
  year: x,
  month: ft,
  day: x,
  weekday: ft,
  hour: x,
  minute: x,
  timeZoneName: ft
}, ji = {
  year: x,
  month: ft,
  day: x,
  weekday: ft,
  hour: x,
  minute: x,
  second: x,
  timeZoneName: ft
};
function F(e) {
  return typeof e > "u";
}
function $t(e) {
  return typeof e == "number";
}
function yr(e) {
  return typeof e == "number" && e % 1 === 0;
}
function Mo(e) {
  return typeof e == "string";
}
function Io(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Li() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function ko(e) {
  return Array.isArray(e) ? e : [e];
}
function gn(e, t, r) {
  if (e.length !== 0)
    return e.reduce((n, i) => {
      const a = [t(i), i];
      return n && r(n[0], a[0]) === n[0] ? n : a;
    }, null)[1];
}
function No(e, t) {
  return t.reduce((r, n) => (r[n] = e[n], r), {});
}
function de(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function zt(e, t, r) {
  return yr(e) && e >= t && e <= r;
}
function Co(e, t) {
  return e - t * Math.floor(e / t);
}
function Q(e, t = 2) {
  const r = e < 0;
  let n;
  return r ? n = "-" + ("" + -e).padStart(t, "0") : n = ("" + e).padStart(t, "0"), n;
}
function Vt(e) {
  if (!(F(e) || e === null || e === ""))
    return parseInt(e, 10);
}
function Jt(e) {
  if (!(F(e) || e === null || e === ""))
    return parseFloat(e);
}
function Qr(e) {
  if (!(F(e) || e === null || e === "")) {
    const t = parseFloat("0." + e) * 1e3;
    return Math.floor(t);
  }
}
function Kr(e, t, r = !1) {
  const n = 10 ** t;
  return (r ? Math.trunc : Math.round)(e * n) / n;
}
function Ge(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function Re(e) {
  return Ge(e) ? 366 : 365;
}
function ur(e, t) {
  const r = Co(t - 1, 12) + 1, n = e + (t - r) / 12;
  return r === 2 ? Ge(n) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1];
}
function $r(e) {
  let t = Date.UTC(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second,
    e.millisecond
  );
  return e.year < 100 && e.year >= 0 && (t = new Date(t), t.setUTCFullYear(t.getUTCFullYear() - 1900)), +t;
}
function cr(e) {
  const t = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7, r = e - 1, n = (r + Math.floor(r / 4) - Math.floor(r / 100) + Math.floor(r / 400)) % 7;
  return t === 4 || n === 3 ? 53 : 52;
}
function Wr(e) {
  return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e;
}
function Ri(e, t, r, n = null) {
  const i = new Date(e), a = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  n && (a.timeZone = n);
  const o = { timeZoneName: t, ...a }, s = new Intl.DateTimeFormat(r, o).formatToParts(i).find((l) => l.type.toLowerCase() === "timezonename");
  return s ? s.value : null;
}
function vr(e, t) {
  let r = parseInt(e, 10);
  Number.isNaN(r) && (r = 0);
  const n = parseInt(t, 10) || 0, i = r < 0 || Object.is(r, -0) ? -n : n;
  return r * 60 + i;
}
function zi(e) {
  const t = Number(e);
  if (typeof e == "boolean" || e === "" || Number.isNaN(t))
    throw new pt(`Invalid unit value ${e}`);
  return t;
}
function fr(e, t) {
  const r = {};
  for (const n in e)
    if (de(e, n)) {
      const i = e[n];
      if (i == null)
        continue;
      r[t(n)] = zi(i);
    }
  return r;
}
function ze(e, t) {
  const r = Math.trunc(Math.abs(e / 60)), n = Math.trunc(Math.abs(e % 60)), i = e >= 0 ? "+" : "-";
  switch (t) {
    case "short":
      return `${i}${Q(r, 2)}:${Q(n, 2)}`;
    case "narrow":
      return `${i}${r}${n > 0 ? `:${n}` : ""}`;
    case "techie":
      return `${i}${Q(r, 2)}${Q(n, 2)}`;
    default:
      throw new RangeError(`Value format ${t} is out of range for property format`);
  }
}
function br(e) {
  return No(e, ["hour", "minute", "second", "millisecond"]);
}
const Zi = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/, Fo = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], Wi = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], Eo = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function Pi(e) {
  switch (e) {
    case "narrow":
      return [...Eo];
    case "short":
      return [...Wi];
    case "long":
      return [...Fo];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const Bi = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], Vi = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], Do = ["M", "T", "W", "T", "F", "S", "S"];
function Gi(e) {
  switch (e) {
    case "narrow":
      return [...Do];
    case "short":
      return [...Vi];
    case "long":
      return [...Bi];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const Yi = ["AM", "PM"], jo = ["Before Christ", "Anno Domini"], Lo = ["BC", "AD"], Ro = ["B", "A"];
function Ui(e) {
  switch (e) {
    case "narrow":
      return [...Ro];
    case "short":
      return [...Lo];
    case "long":
      return [...jo];
    default:
      return null;
  }
}
function zo(e) {
  return Yi[e.hour < 12 ? 0 : 1];
}
function Zo(e, t) {
  return Gi(t)[e.weekday - 1];
}
function Wo(e, t) {
  return Pi(t)[e.month - 1];
}
function Po(e, t) {
  return Ui(t)[e.year < 0 ? 0 : 1];
}
function Bo(e, t, r = "always", n = !1) {
  const i = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, a = ["hours", "minutes", "seconds"].indexOf(e) === -1;
  if (r === "auto" && a) {
    const y = e === "days";
    switch (t) {
      case 1:
        return y ? "tomorrow" : `next ${i[e][0]}`;
      case -1:
        return y ? "yesterday" : `last ${i[e][0]}`;
      case 0:
        return y ? "today" : `this ${i[e][0]}`;
    }
  }
  const o = Object.is(t, -0) || t < 0, s = Math.abs(t), l = s === 1, u = i[e], f = n ? l ? u[1] : u[2] || u[1] : l ? i[e][0] : e;
  return o ? `${s} ${f} ago` : `in ${s} ${f}`;
}
function pn(e, t) {
  let r = "";
  for (const n of e)
    n.literal ? r += n.val : r += t(n.val);
  return r;
}
const Vo = {
  D: Zr,
  DD: pi,
  DDD: yi,
  DDDD: vi,
  t: bi,
  tt: wi,
  ttt: xi,
  tttt: Si,
  T: Ai,
  TT: Ti,
  TTT: Oi,
  TTTT: Mi,
  f: Ii,
  ff: Ni,
  fff: Fi,
  ffff: Di,
  F: ki,
  FF: Ci,
  FFF: Ei,
  FFFF: ji
};
class it {
  static create(t, r = {}) {
    return new it(t, r);
  }
  static parseFormat(t) {
    let r = null, n = "", i = !1;
    const a = [];
    for (let o = 0; o < t.length; o++) {
      const s = t.charAt(o);
      s === "'" ? (n.length > 0 && a.push({ literal: i, val: n }), r = null, n = "", i = !i) : i || s === r ? n += s : (n.length > 0 && a.push({ literal: !1, val: n }), n = s, r = s);
    }
    return n.length > 0 && a.push({ literal: i, val: n }), a;
  }
  static macroTokenToFormatOpts(t) {
    return Vo[t];
  }
  constructor(t, r) {
    this.opts = r, this.loc = t, this.systemLoc = null;
  }
  formatWithSystemDefault(t, r) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(t, { ...this.opts, ...r }).format();
  }
  formatDateTime(t, r = {}) {
    return this.loc.dtFormatter(t, { ...this.opts, ...r }).format();
  }
  formatDateTimeParts(t, r = {}) {
    return this.loc.dtFormatter(t, { ...this.opts, ...r }).formatToParts();
  }
  resolvedOptions(t, r = {}) {
    return this.loc.dtFormatter(t, { ...this.opts, ...r }).resolvedOptions();
  }
  num(t, r = 0) {
    if (this.opts.forceSimple)
      return Q(t, r);
    const n = { ...this.opts };
    return r > 0 && (n.padTo = r), this.loc.numberFormatter(n).format(t);
  }
  formatDateTimeFromString(t, r) {
    const n = this.loc.listingMode() === "en", i = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", a = (m, v) => this.loc.extract(t, m, v), o = (m) => t.isOffsetFixed && t.offset === 0 && m.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, m.format) : "", s = () => n ? zo(t) : a({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (m, v) => n ? Wo(t, m) : a(v ? { month: m } : { month: m, day: "numeric" }, "month"), u = (m, v) => n ? Zo(t, m) : a(
      v ? { weekday: m } : { weekday: m, month: "long", day: "numeric" },
      "weekday"
    ), f = (m) => {
      const v = it.macroTokenToFormatOpts(m);
      return v ? this.formatWithSystemDefault(t, v) : m;
    }, y = (m) => n ? Po(t, m) : a({ era: m }, "era"), d = (m) => {
      switch (m) {
        case "S":
          return this.num(t.millisecond);
        case "u":
        case "SSS":
          return this.num(t.millisecond, 3);
        case "s":
          return this.num(t.second);
        case "ss":
          return this.num(t.second, 2);
        case "uu":
          return this.num(Math.floor(t.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(t.millisecond / 100));
        case "m":
          return this.num(t.minute);
        case "mm":
          return this.num(t.minute, 2);
        case "h":
          return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12);
        case "hh":
          return this.num(t.hour % 12 === 0 ? 12 : t.hour % 12, 2);
        case "H":
          return this.num(t.hour);
        case "HH":
          return this.num(t.hour, 2);
        case "Z":
          return o({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return o({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return o({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return t.zone.offsetName(t.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return t.zone.offsetName(t.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return t.zoneName;
        case "a":
          return s();
        case "d":
          return i ? a({ day: "numeric" }, "day") : this.num(t.day);
        case "dd":
          return i ? a({ day: "2-digit" }, "day") : this.num(t.day, 2);
        case "c":
          return this.num(t.weekday);
        case "ccc":
          return u("short", !0);
        case "cccc":
          return u("long", !0);
        case "ccccc":
          return u("narrow", !0);
        case "E":
          return this.num(t.weekday);
        case "EEE":
          return u("short", !1);
        case "EEEE":
          return u("long", !1);
        case "EEEEE":
          return u("narrow", !1);
        case "L":
          return i ? a({ month: "numeric", day: "numeric" }, "month") : this.num(t.month);
        case "LL":
          return i ? a({ month: "2-digit", day: "numeric" }, "month") : this.num(t.month, 2);
        case "LLL":
          return l("short", !0);
        case "LLLL":
          return l("long", !0);
        case "LLLLL":
          return l("narrow", !0);
        case "M":
          return i ? a({ month: "numeric" }, "month") : this.num(t.month);
        case "MM":
          return i ? a({ month: "2-digit" }, "month") : this.num(t.month, 2);
        case "MMM":
          return l("short", !1);
        case "MMMM":
          return l("long", !1);
        case "MMMMM":
          return l("narrow", !1);
        case "y":
          return i ? a({ year: "numeric" }, "year") : this.num(t.year);
        case "yy":
          return i ? a({ year: "2-digit" }, "year") : this.num(t.year.toString().slice(-2), 2);
        case "yyyy":
          return i ? a({ year: "numeric" }, "year") : this.num(t.year, 4);
        case "yyyyyy":
          return i ? a({ year: "numeric" }, "year") : this.num(t.year, 6);
        case "G":
          return y("short");
        case "GG":
          return y("long");
        case "GGGGG":
          return y("narrow");
        case "kk":
          return this.num(t.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(t.weekYear, 4);
        case "W":
          return this.num(t.weekNumber);
        case "WW":
          return this.num(t.weekNumber, 2);
        case "o":
          return this.num(t.ordinal);
        case "ooo":
          return this.num(t.ordinal, 3);
        case "q":
          return this.num(t.quarter);
        case "qq":
          return this.num(t.quarter, 2);
        case "X":
          return this.num(Math.floor(t.ts / 1e3));
        case "x":
          return this.num(t.ts);
        default:
          return f(m);
      }
    };
    return pn(it.parseFormat(r), d);
  }
  formatDurationFromString(t, r) {
    const n = (l) => {
      switch (l[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, i = (l) => (u) => {
      const f = n(u);
      return f ? this.num(l.get(f), u.length) : u;
    }, a = it.parseFormat(r), o = a.reduce(
      (l, { literal: u, val: f }) => u ? l : l.concat(f),
      []
    ), s = t.shiftTo(...o.map(n).filter((l) => l));
    return pn(a, i(s));
  }
}
class Mt {
  constructor(t, r) {
    this.reason = t, this.explanation = r;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
class Ye {
  get type() {
    throw new Bt();
  }
  get name() {
    throw new Bt();
  }
  get ianaName() {
    return this.name;
  }
  get isUniversal() {
    throw new Bt();
  }
  offsetName(t, r) {
    throw new Bt();
  }
  formatOffset(t, r) {
    throw new Bt();
  }
  offset(t) {
    throw new Bt();
  }
  equals(t) {
    throw new Bt();
  }
  get isValid() {
    throw new Bt();
  }
}
let Ir = null;
class wr extends Ye {
  static get instance() {
    return Ir === null && (Ir = new wr()), Ir;
  }
  get type() {
    return "system";
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(t, { format: r, locale: n }) {
    return Ri(t, r, n);
  }
  formatOffset(t, r) {
    return ze(this.offset(t), r);
  }
  offset(t) {
    return -new Date(t).getTimezoneOffset();
  }
  equals(t) {
    return t.type === "system";
  }
  get isValid() {
    return !0;
  }
}
let or = {};
function Go(e) {
  return or[e] || (or[e] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: e,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), or[e];
}
const Yo = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function Uo(e, t) {
  const r = e.format(t).replace(/\u200E/g, ""), n = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r), [, i, a, o, s, l, u, f] = n;
  return [o, i, a, s, l, u, f];
}
function Ho(e, t) {
  const r = e.formatToParts(t), n = [];
  for (let i = 0; i < r.length; i++) {
    const { type: a, value: o } = r[i], s = Yo[a];
    a === "era" ? n[s] = o : F(s) || (n[s] = parseInt(o, 10));
  }
  return n;
}
let Qe = {};
class Zt extends Ye {
  static create(t) {
    return Qe[t] || (Qe[t] = new Zt(t)), Qe[t];
  }
  static resetCache() {
    Qe = {}, or = {};
  }
  static isValidSpecifier(t) {
    return this.isValidZone(t);
  }
  static isValidZone(t) {
    if (!t)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: t }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(t) {
    super(), this.zoneName = t, this.valid = Zt.isValidZone(t);
  }
  get type() {
    return "iana";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(t, { format: r, locale: n }) {
    return Ri(t, r, n, this.name);
  }
  formatOffset(t, r) {
    return ze(this.offset(t), r);
  }
  offset(t) {
    const r = new Date(t);
    if (isNaN(r))
      return NaN;
    const n = Go(this.name);
    let [i, a, o, s, l, u, f] = n.formatToParts ? Ho(n, r) : Uo(n, r);
    s === "BC" && (i = -Math.abs(i) + 1);
    const d = $r({
      year: i,
      month: a,
      day: o,
      hour: l === 24 ? 0 : l,
      minute: u,
      second: f,
      millisecond: 0
    });
    let m = +r;
    const v = m % 1e3;
    return m -= v >= 0 ? v : 1e3 + v, (d - m) / (60 * 1e3);
  }
  equals(t) {
    return t.type === "iana" && t.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}
let kr = null;
class at extends Ye {
  static get utcInstance() {
    return kr === null && (kr = new at(0)), kr;
  }
  static instance(t) {
    return t === 0 ? at.utcInstance : new at(t);
  }
  static parseSpecifier(t) {
    if (t) {
      const r = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r)
        return new at(vr(r[1], r[2]));
    }
    return null;
  }
  constructor(t) {
    super(), this.fixed = t;
  }
  get type() {
    return "fixed";
  }
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${ze(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${ze(-this.fixed, "narrow")}`;
  }
  offsetName() {
    return this.name;
  }
  formatOffset(t, r) {
    return ze(this.fixed, r);
  }
  get isUniversal() {
    return !0;
  }
  offset() {
    return this.fixed;
  }
  equals(t) {
    return t.type === "fixed" && t.fixed === this.fixed;
  }
  get isValid() {
    return !0;
  }
}
class Jo extends Ye {
  constructor(t) {
    super(), this.zoneName = t;
  }
  get type() {
    return "invalid";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return "";
  }
  offset() {
    return NaN;
  }
  equals() {
    return !1;
  }
  get isValid() {
    return !1;
  }
}
function Yt(e, t) {
  if (F(e) || e === null)
    return t;
  if (e instanceof Ye)
    return e;
  if (Mo(e)) {
    const r = e.toLowerCase();
    return r === "default" ? t : r === "local" || r === "system" ? wr.instance : r === "utc" || r === "gmt" ? at.utcInstance : at.parseSpecifier(r) || Zt.create(e);
  } else
    return $t(e) ? at.instance(e) : typeof e == "object" && e.offset && typeof e.offset == "number" ? e : new Jo(e);
}
let yn = () => Date.now(), vn = "system", bn = null, wn = null, xn = null, Sn;
class $ {
  static get now() {
    return yn;
  }
  static set now(t) {
    yn = t;
  }
  static set defaultZone(t) {
    vn = t;
  }
  static get defaultZone() {
    return Yt(vn, wr.instance);
  }
  static get defaultLocale() {
    return bn;
  }
  static set defaultLocale(t) {
    bn = t;
  }
  static get defaultNumberingSystem() {
    return wn;
  }
  static set defaultNumberingSystem(t) {
    wn = t;
  }
  static get defaultOutputCalendar() {
    return xn;
  }
  static set defaultOutputCalendar(t) {
    xn = t;
  }
  static get throwOnInvalid() {
    return Sn;
  }
  static set throwOnInvalid(t) {
    Sn = t;
  }
  static resetCaches() {
    W.resetCache(), Zt.resetCache();
  }
}
let An = {};
function Xo(e, t = {}) {
  const r = JSON.stringify([e, t]);
  let n = An[r];
  return n || (n = new Intl.ListFormat(e, t), An[r] = n), n;
}
let Pr = {};
function Br(e, t = {}) {
  const r = JSON.stringify([e, t]);
  let n = Pr[r];
  return n || (n = new Intl.DateTimeFormat(e, t), Pr[r] = n), n;
}
let Vr = {};
function _o(e, t = {}) {
  const r = JSON.stringify([e, t]);
  let n = Vr[r];
  return n || (n = new Intl.NumberFormat(e, t), Vr[r] = n), n;
}
let Gr = {};
function qo(e, t = {}) {
  const { base: r, ...n } = t, i = JSON.stringify([e, n]);
  let a = Gr[i];
  return a || (a = new Intl.RelativeTimeFormat(e, t), Gr[i] = a), a;
}
let De = null;
function Qo() {
  return De || (De = new Intl.DateTimeFormat().resolvedOptions().locale, De);
}
function Ko(e) {
  const t = e.indexOf("-u-");
  if (t === -1)
    return [e];
  {
    let r;
    const n = e.substring(0, t);
    try {
      r = Br(e).resolvedOptions();
    } catch {
      r = Br(n).resolvedOptions();
    }
    const { numberingSystem: i, calendar: a } = r;
    return [n, i, a];
  }
}
function $o(e, t, r) {
  return (r || t) && (e += "-u", r && (e += `-ca-${r}`), t && (e += `-nu-${t}`)), e;
}
function ts(e) {
  const t = [];
  for (let r = 1; r <= 12; r++) {
    const n = O.utc(2016, r, 1);
    t.push(e(n));
  }
  return t;
}
function es(e) {
  const t = [];
  for (let r = 1; r <= 7; r++) {
    const n = O.utc(2016, 11, 13 + r);
    t.push(e(n));
  }
  return t;
}
function Ke(e, t, r, n, i) {
  const a = e.listingMode(r);
  return a === "error" ? null : a === "en" ? n(t) : i(t);
}
function rs(e) {
  return e.numberingSystem && e.numberingSystem !== "latn" ? !1 : e.numberingSystem === "latn" || !e.locale || e.locale.startsWith("en") || new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem === "latn";
}
class ns {
  constructor(t, r, n) {
    this.padTo = n.padTo || 0, this.floor = n.floor || !1;
    const { padTo: i, floor: a, ...o } = n;
    if (!r || Object.keys(o).length > 0) {
      const s = { useGrouping: !1, ...n };
      n.padTo > 0 && (s.minimumIntegerDigits = n.padTo), this.inf = _o(t, s);
    }
  }
  format(t) {
    if (this.inf) {
      const r = this.floor ? Math.floor(t) : t;
      return this.inf.format(r);
    } else {
      const r = this.floor ? Math.floor(t) : Kr(t, 3);
      return Q(r, this.padTo);
    }
  }
}
class is {
  constructor(t, r, n) {
    this.opts = n;
    let i;
    if (t.zone.isUniversal) {
      const o = -1 * (t.offset / 60), s = o >= 0 ? `Etc/GMT+${o}` : `Etc/GMT${o}`;
      t.offset !== 0 && Zt.create(s).valid ? (i = s, this.dt = t) : (i = "UTC", n.timeZoneName ? this.dt = t : this.dt = t.offset === 0 ? t : O.fromMillis(t.ts + t.offset * 60 * 1e3));
    } else
      t.zone.type === "system" ? this.dt = t : (this.dt = t, i = t.zone.name);
    const a = { ...this.opts };
    i && (a.timeZone = i), this.dtf = Br(r, a);
  }
  format() {
    return this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class as {
  constructor(t, r, n) {
    this.opts = { style: "long", ...n }, !r && Li() && (this.rtf = qo(t, n));
  }
  format(t, r) {
    return this.rtf ? this.rtf.format(t, r) : Bo(r, t, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(t, r) {
    return this.rtf ? this.rtf.formatToParts(t, r) : [];
  }
}
class W {
  static fromOpts(t) {
    return W.create(t.locale, t.numberingSystem, t.outputCalendar, t.defaultToEN);
  }
  static create(t, r, n, i = !1) {
    const a = t || $.defaultLocale, o = a || (i ? "en-US" : Qo()), s = r || $.defaultNumberingSystem, l = n || $.defaultOutputCalendar;
    return new W(o, s, l, a);
  }
  static resetCache() {
    De = null, Pr = {}, Vr = {}, Gr = {};
  }
  static fromObject({ locale: t, numberingSystem: r, outputCalendar: n } = {}) {
    return W.create(t, r, n);
  }
  constructor(t, r, n, i) {
    const [a, o, s] = Ko(t);
    this.locale = a, this.numberingSystem = r || o || null, this.outputCalendar = n || s || null, this.intl = $o(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = i, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = rs(this)), this.fastNumbersCached;
  }
  listingMode() {
    const t = this.isEnglish(), r = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return t && r ? "en" : "intl";
  }
  clone(t) {
    return !t || Object.getOwnPropertyNames(t).length === 0 ? this : W.create(
      t.locale || this.specifiedLocale,
      t.numberingSystem || this.numberingSystem,
      t.outputCalendar || this.outputCalendar,
      t.defaultToEN || !1
    );
  }
  redefaultToEN(t = {}) {
    return this.clone({ ...t, defaultToEN: !0 });
  }
  redefaultToSystem(t = {}) {
    return this.clone({ ...t, defaultToEN: !1 });
  }
  months(t, r = !1, n = !0) {
    return Ke(this, t, n, Pi, () => {
      const i = r ? { month: t, day: "numeric" } : { month: t }, a = r ? "format" : "standalone";
      return this.monthsCache[a][t] || (this.monthsCache[a][t] = ts((o) => this.extract(o, i, "month"))), this.monthsCache[a][t];
    });
  }
  weekdays(t, r = !1, n = !0) {
    return Ke(this, t, n, Gi, () => {
      const i = r ? { weekday: t, year: "numeric", month: "long", day: "numeric" } : { weekday: t }, a = r ? "format" : "standalone";
      return this.weekdaysCache[a][t] || (this.weekdaysCache[a][t] = es(
        (o) => this.extract(o, i, "weekday")
      )), this.weekdaysCache[a][t];
    });
  }
  meridiems(t = !0) {
    return Ke(
      this,
      void 0,
      t,
      () => Yi,
      () => {
        if (!this.meridiemCache) {
          const r = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [O.utc(2016, 11, 13, 9), O.utc(2016, 11, 13, 19)].map(
            (n) => this.extract(n, r, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(t, r = !0) {
    return Ke(this, t, r, Ui, () => {
      const n = { era: t };
      return this.eraCache[t] || (this.eraCache[t] = [O.utc(-40, 1, 1), O.utc(2017, 1, 1)].map(
        (i) => this.extract(i, n, "era")
      )), this.eraCache[t];
    });
  }
  extract(t, r, n) {
    const i = this.dtFormatter(t, r), a = i.formatToParts(), o = a.find((s) => s.type.toLowerCase() === n);
    return o ? o.value : null;
  }
  numberFormatter(t = {}) {
    return new ns(this.intl, t.forceSimple || this.fastNumbers, t);
  }
  dtFormatter(t, r = {}) {
    return new is(t, this.intl, r);
  }
  relFormatter(t = {}) {
    return new as(this.intl, this.isEnglish(), t);
  }
  listFormatter(t = {}) {
    return Xo(this.intl, t);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(t) {
    return this.locale === t.locale && this.numberingSystem === t.numberingSystem && this.outputCalendar === t.outputCalendar;
  }
}
function be(...e) {
  const t = e.reduce((r, n) => r + n.source, "");
  return RegExp(`^${t}$`);
}
function we(...e) {
  return (t) => e.reduce(
    ([r, n, i], a) => {
      const [o, s, l] = a(t, i);
      return [{ ...r, ...o }, s || n, l];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function xe(e, ...t) {
  if (e == null)
    return [null, null];
  for (const [r, n] of t) {
    const i = r.exec(e);
    if (i)
      return n(i);
  }
  return [null, null];
}
function Hi(...e) {
  return (t, r) => {
    const n = {};
    let i;
    for (i = 0; i < e.length; i++)
      n[e[i]] = Vt(t[r + i]);
    return [n, null, r + i];
  };
}
const Ji = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, os = `(?:${Ji.source}?(?:\\[(${Zi.source})\\])?)?`, tn = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, Xi = RegExp(`${tn.source}${os}`), en = RegExp(`(?:T${Xi.source})?`), ss = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, ls = /(\d{4})-?W(\d\d)(?:-?(\d))?/, us = /(\d{4})-?(\d{3})/, cs = Hi("weekYear", "weekNumber", "weekDay"), fs = Hi("year", "ordinal"), hs = /(\d{4})-(\d\d)-(\d\d)/, _i = RegExp(
  `${tn.source} ?(?:${Ji.source}|(${Zi.source}))?`
), ds = RegExp(`(?: ${_i.source})?`);
function fe(e, t, r) {
  const n = e[t];
  return F(n) ? r : Vt(n);
}
function ms(e, t) {
  return [{
    year: fe(e, t),
    month: fe(e, t + 1, 1),
    day: fe(e, t + 2, 1)
  }, null, t + 3];
}
function Se(e, t) {
  return [{
    hours: fe(e, t, 0),
    minutes: fe(e, t + 1, 0),
    seconds: fe(e, t + 2, 0),
    milliseconds: Qr(e[t + 3])
  }, null, t + 4];
}
function Ue(e, t) {
  const r = !e[t] && !e[t + 1], n = vr(e[t + 1], e[t + 2]), i = r ? null : at.instance(n);
  return [{}, i, t + 3];
}
function He(e, t) {
  const r = e[t] ? Zt.create(e[t]) : null;
  return [{}, r, t + 1];
}
const gs = RegExp(`^T?${tn.source}$`), ps = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function ys(e) {
  const [t, r, n, i, a, o, s, l, u] = e, f = t[0] === "-", y = l && l[0] === "-", d = (m, v = !1) => m !== void 0 && (v || m && f) ? -m : m;
  return [
    {
      years: d(Jt(r)),
      months: d(Jt(n)),
      weeks: d(Jt(i)),
      days: d(Jt(a)),
      hours: d(Jt(o)),
      minutes: d(Jt(s)),
      seconds: d(Jt(l), l === "-0"),
      milliseconds: d(Qr(u), y)
    }
  ];
}
const vs = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function rn(e, t, r, n, i, a, o) {
  const s = {
    year: t.length === 2 ? Wr(Vt(t)) : Vt(t),
    month: Wi.indexOf(r) + 1,
    day: Vt(n),
    hour: Vt(i),
    minute: Vt(a)
  };
  return o && (s.second = Vt(o)), e && (s.weekday = e.length > 3 ? Bi.indexOf(e) + 1 : Vi.indexOf(e) + 1), s;
}
const bs = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function ws(e) {
  const [
    ,
    t,
    r,
    n,
    i,
    a,
    o,
    s,
    l,
    u,
    f,
    y
  ] = e, d = rn(t, i, n, r, a, o, s);
  let m;
  return l ? m = vs[l] : u ? m = 0 : m = vr(f, y), [d, new at(m)];
}
function xs(e) {
  return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const Ss = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, As = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Ts = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Tn(e) {
  const [, t, r, n, i, a, o, s] = e;
  return [rn(t, i, n, r, a, o, s), at.utcInstance];
}
function Os(e) {
  const [, t, r, n, i, a, o, s] = e;
  return [rn(t, s, r, n, i, a, o), at.utcInstance];
}
const Ms = be(ss, en), Is = be(ls, en), ks = be(us, en), Ns = be(Xi), qi = we(
  ms,
  Se,
  Ue,
  He
), Cs = we(
  cs,
  Se,
  Ue,
  He
), Fs = we(
  fs,
  Se,
  Ue,
  He
), Es = we(
  Se,
  Ue,
  He
);
function Ds(e) {
  return xe(
    e,
    [Ms, qi],
    [Is, Cs],
    [ks, Fs],
    [Ns, Es]
  );
}
function js(e) {
  return xe(xs(e), [bs, ws]);
}
function Ls(e) {
  return xe(
    e,
    [Ss, Tn],
    [As, Tn],
    [Ts, Os]
  );
}
function Rs(e) {
  return xe(e, [ps, ys]);
}
const zs = we(Se);
function Zs(e) {
  return xe(e, [gs, zs]);
}
const Ws = be(hs, ds), Ps = be(_i), Bs = we(
  Se,
  Ue,
  He
);
function Vs(e) {
  return xe(
    e,
    [Ws, qi],
    [Ps, Bs]
  );
}
const Gs = "Invalid Duration", Qi = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, Ys = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...Qi
}, gt = 146097 / 400, ce = 146097 / 4800, Us = {
  years: {
    quarters: 4,
    months: 12,
    weeks: gt / 7,
    days: gt,
    hours: gt * 24,
    minutes: gt * 24 * 60,
    seconds: gt * 24 * 60 * 60,
    milliseconds: gt * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: gt / 28,
    days: gt / 4,
    hours: gt * 24 / 4,
    minutes: gt * 24 * 60 / 4,
    seconds: gt * 24 * 60 * 60 / 4,
    milliseconds: gt * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: ce / 7,
    days: ce,
    hours: ce * 24,
    minutes: ce * 24 * 60,
    seconds: ce * 24 * 60 * 60,
    milliseconds: ce * 24 * 60 * 60 * 1e3
  },
  ...Qi
}, _t = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], Hs = _t.slice(0).reverse();
function Xt(e, t, r = !1) {
  const n = {
    values: r ? t.values : { ...e.values, ...t.values || {} },
    loc: e.loc.clone(t.loc),
    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
    matrix: t.matrix || e.matrix
  };
  return new D(n);
}
function Js(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Ki(e, t, r, n, i) {
  const a = e[i][r], o = t[r] / a, s = Math.sign(o) === Math.sign(n[i]), l = !s && n[i] !== 0 && Math.abs(o) <= 1 ? Js(o) : Math.trunc(o);
  n[i] += l, t[r] -= l * a;
}
function Xs(e, t) {
  Hs.reduce((r, n) => F(t[n]) ? r : (r && Ki(e, t, r, t, n), n), null);
}
class D {
  constructor(t) {
    const r = t.conversionAccuracy === "longterm" || !1;
    let n = r ? Us : Ys;
    t.matrix && (n = t.matrix), this.values = t.values, this.loc = t.loc || W.create(), this.conversionAccuracy = r ? "longterm" : "casual", this.invalid = t.invalid || null, this.matrix = n, this.isLuxonDuration = !0;
  }
  static fromMillis(t, r) {
    return D.fromObject({ milliseconds: t }, r);
  }
  static fromObject(t, r = {}) {
    if (t == null || typeof t != "object")
      throw new pt(
        `Duration.fromObject: argument expected to be an object, got ${t === null ? "null" : typeof t}`
      );
    return new D({
      values: fr(t, D.normalizeUnit),
      loc: W.fromObject(r),
      conversionAccuracy: r.conversionAccuracy,
      matrix: r.matrix
    });
  }
  static fromDurationLike(t) {
    if ($t(t))
      return D.fromMillis(t);
    if (D.isDuration(t))
      return t;
    if (typeof t == "object")
      return D.fromObject(t);
    throw new pt(
      `Unknown duration argument ${t} of type ${typeof t}`
    );
  }
  static fromISO(t, r) {
    const [n] = Rs(t);
    return n ? D.fromObject(n, r) : D.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(t, r) {
    const [n] = Zs(t);
    return n ? D.fromObject(n, r) : D.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  static invalid(t, r = null) {
    if (!t)
      throw new pt("need to specify a reason the Duration is invalid");
    const n = t instanceof Mt ? t : new Mt(t, r);
    if ($.throwOnInvalid)
      throw new Ao(n);
    return new D({ invalid: n });
  }
  static normalizeUnit(t) {
    const r = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[t && t.toLowerCase()];
    if (!r)
      throw new gi(t);
    return r;
  }
  static isDuration(t) {
    return t && t.isLuxonDuration || !1;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(t, r = {}) {
    const n = {
      ...r,
      floor: r.round !== !1 && r.floor !== !1
    };
    return this.isValid ? it.create(this.loc, n).formatDurationFromString(this, t) : Gs;
  }
  toHuman(t = {}) {
    const r = _t.map((n) => {
      const i = this.values[n];
      return F(i) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...t, unit: n.slice(0, -1) }).format(i);
    }).filter((n) => n);
    return this.loc.listFormatter({ type: "conjunction", style: t.listStyle || "narrow", ...t }).format(r);
  }
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  toISO() {
    if (!this.isValid)
      return null;
    let t = "P";
    return this.years !== 0 && (t += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (t += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (t += this.weeks + "W"), this.days !== 0 && (t += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (t += "T"), this.hours !== 0 && (t += this.hours + "H"), this.minutes !== 0 && (t += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (t += Kr(this.seconds + this.milliseconds / 1e3, 3) + "S"), t === "P" && (t += "T0S"), t;
  }
  toISOTime(t = {}) {
    if (!this.isValid)
      return null;
    const r = this.toMillis();
    if (r < 0 || r >= 864e5)
      return null;
    t = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...t
    };
    const n = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let i = t.format === "basic" ? "hhmm" : "hh:mm";
    (!t.suppressSeconds || n.seconds !== 0 || n.milliseconds !== 0) && (i += t.format === "basic" ? "ss" : ":ss", (!t.suppressMilliseconds || n.milliseconds !== 0) && (i += ".SSS"));
    let a = n.toFormat(i);
    return t.includePrefix && (a = "T" + a), a;
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  toMillis() {
    return this.as("milliseconds");
  }
  valueOf() {
    return this.toMillis();
  }
  plus(t) {
    if (!this.isValid)
      return this;
    const r = D.fromDurationLike(t), n = {};
    for (const i of _t)
      (de(r.values, i) || de(this.values, i)) && (n[i] = r.get(i) + this.get(i));
    return Xt(this, { values: n }, !0);
  }
  minus(t) {
    if (!this.isValid)
      return this;
    const r = D.fromDurationLike(t);
    return this.plus(r.negate());
  }
  mapUnits(t) {
    if (!this.isValid)
      return this;
    const r = {};
    for (const n of Object.keys(this.values))
      r[n] = zi(t(this.values[n], n));
    return Xt(this, { values: r }, !0);
  }
  get(t) {
    return this[D.normalizeUnit(t)];
  }
  set(t) {
    if (!this.isValid)
      return this;
    const r = { ...this.values, ...fr(t, D.normalizeUnit) };
    return Xt(this, { values: r });
  }
  reconfigure({ locale: t, numberingSystem: r, conversionAccuracy: n, matrix: i } = {}) {
    const o = { loc: this.loc.clone({ locale: t, numberingSystem: r }), matrix: i, conversionAccuracy: n };
    return Xt(this, o);
  }
  as(t) {
    return this.isValid ? this.shiftTo(t).get(t) : NaN;
  }
  normalize() {
    if (!this.isValid)
      return this;
    const t = this.toObject();
    return Xs(this.matrix, t), Xt(this, { values: t }, !0);
  }
  shiftTo(...t) {
    if (!this.isValid)
      return this;
    if (t.length === 0)
      return this;
    t = t.map((o) => D.normalizeUnit(o));
    const r = {}, n = {}, i = this.toObject();
    let a;
    for (const o of _t)
      if (t.indexOf(o) >= 0) {
        a = o;
        let s = 0;
        for (const u in n)
          s += this.matrix[u][o] * n[u], n[u] = 0;
        $t(i[o]) && (s += i[o]);
        const l = Math.trunc(s);
        r[o] = l, n[o] = (s * 1e3 - l * 1e3) / 1e3;
        for (const u in i)
          _t.indexOf(u) > _t.indexOf(o) && Ki(this.matrix, i, u, r, o);
      } else
        $t(i[o]) && (n[o] = i[o]);
    for (const o in n)
      n[o] !== 0 && (r[a] += o === a ? n[o] : n[o] / this.matrix[a][o]);
    return Xt(this, { values: r }, !0).normalize();
  }
  negate() {
    if (!this.isValid)
      return this;
    const t = {};
    for (const r of Object.keys(this.values))
      t[r] = this.values[r] === 0 ? 0 : -this.values[r];
    return Xt(this, { values: t }, !0);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  equals(t) {
    if (!this.isValid || !t.isValid || !this.loc.equals(t.loc))
      return !1;
    function r(n, i) {
      return n === void 0 || n === 0 ? i === void 0 || i === 0 : n === i;
    }
    for (const n of _t)
      if (!r(this.values[n], t.values[n]))
        return !1;
    return !0;
  }
}
const Ie = "Invalid Interval";
function _s(e, t) {
  return !e || !e.isValid ? G.invalid("missing or invalid start") : !t || !t.isValid ? G.invalid("missing or invalid end") : t < e ? G.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`
  ) : null;
}
class G {
  constructor(t) {
    this.s = t.start, this.e = t.end, this.invalid = t.invalid || null, this.isLuxonInterval = !0;
  }
  static invalid(t, r = null) {
    if (!t)
      throw new pt("need to specify a reason the Interval is invalid");
    const n = t instanceof Mt ? t : new Mt(t, r);
    if ($.throwOnInvalid)
      throw new So(n);
    return new G({ invalid: n });
  }
  static fromDateTimes(t, r) {
    const n = Ce(t), i = Ce(r), a = _s(n, i);
    return a == null ? new G({
      start: n,
      end: i
    }) : a;
  }
  static after(t, r) {
    const n = D.fromDurationLike(r), i = Ce(t);
    return G.fromDateTimes(i, i.plus(n));
  }
  static before(t, r) {
    const n = D.fromDurationLike(r), i = Ce(t);
    return G.fromDateTimes(i.minus(n), i);
  }
  static fromISO(t, r) {
    const [n, i] = (t || "").split("/", 2);
    if (n && i) {
      let a, o;
      try {
        a = O.fromISO(n, r), o = a.isValid;
      } catch {
        o = !1;
      }
      let s, l;
      try {
        s = O.fromISO(i, r), l = s.isValid;
      } catch {
        l = !1;
      }
      if (o && l)
        return G.fromDateTimes(a, s);
      if (o) {
        const u = D.fromISO(i, r);
        if (u.isValid)
          return G.after(a, u);
      } else if (l) {
        const u = D.fromISO(n, r);
        if (u.isValid)
          return G.before(s, u);
      }
    }
    return G.invalid("unparsable", `the input "${t}" can't be parsed as ISO 8601`);
  }
  static isInterval(t) {
    return t && t.isLuxonInterval || !1;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get isValid() {
    return this.invalidReason === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(t = "milliseconds") {
    return this.isValid ? this.toDuration(t).get(t) : NaN;
  }
  count(t = "milliseconds") {
    if (!this.isValid)
      return NaN;
    const r = this.start.startOf(t), n = this.end.startOf(t);
    return Math.floor(n.diff(r, t).get(t)) + 1;
  }
  hasSame(t) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, t) : !1;
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(t) {
    return this.isValid ? this.s > t : !1;
  }
  isBefore(t) {
    return this.isValid ? this.e <= t : !1;
  }
  contains(t) {
    return this.isValid ? this.s <= t && this.e > t : !1;
  }
  set({ start: t, end: r } = {}) {
    return this.isValid ? G.fromDateTimes(t || this.s, r || this.e) : this;
  }
  splitAt(...t) {
    if (!this.isValid)
      return [];
    const r = t.map(Ce).filter((o) => this.contains(o)).sort(), n = [];
    let { s: i } = this, a = 0;
    for (; i < this.e; ) {
      const o = r[a] || this.e, s = +o > +this.e ? this.e : o;
      n.push(G.fromDateTimes(i, s)), i = s, a += 1;
    }
    return n;
  }
  splitBy(t) {
    const r = D.fromDurationLike(t);
    if (!this.isValid || !r.isValid || r.as("milliseconds") === 0)
      return [];
    let { s: n } = this, i = 1, a;
    const o = [];
    for (; n < this.e; ) {
      const s = this.start.plus(r.mapUnits((l) => l * i));
      a = +s > +this.e ? this.e : s, o.push(G.fromDateTimes(n, a)), n = a, i += 1;
    }
    return o;
  }
  divideEqually(t) {
    return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : [];
  }
  overlaps(t) {
    return this.e > t.s && this.s < t.e;
  }
  abutsStart(t) {
    return this.isValid ? +this.e == +t.s : !1;
  }
  abutsEnd(t) {
    return this.isValid ? +t.e == +this.s : !1;
  }
  engulfs(t) {
    return this.isValid ? this.s <= t.s && this.e >= t.e : !1;
  }
  equals(t) {
    return !this.isValid || !t.isValid ? !1 : this.s.equals(t.s) && this.e.equals(t.e);
  }
  intersection(t) {
    if (!this.isValid)
      return this;
    const r = this.s > t.s ? this.s : t.s, n = this.e < t.e ? this.e : t.e;
    return r >= n ? null : G.fromDateTimes(r, n);
  }
  union(t) {
    if (!this.isValid)
      return this;
    const r = this.s < t.s ? this.s : t.s, n = this.e > t.e ? this.e : t.e;
    return G.fromDateTimes(r, n);
  }
  static merge(t) {
    const [r, n] = t.sort((i, a) => i.s - a.s).reduce(
      ([i, a], o) => a ? a.overlaps(o) || a.abutsStart(o) ? [i, a.union(o)] : [i.concat([a]), o] : [i, o],
      [[], null]
    );
    return n && r.push(n), r;
  }
  static xor(t) {
    let r = null, n = 0;
    const i = [], a = t.map((l) => [
      { time: l.s, type: "s" },
      { time: l.e, type: "e" }
    ]), o = Array.prototype.concat(...a), s = o.sort((l, u) => l.time - u.time);
    for (const l of s)
      n += l.type === "s" ? 1 : -1, n === 1 ? r = l.time : (r && +r != +l.time && i.push(G.fromDateTimes(r, l.time)), r = null);
    return G.merge(i);
  }
  difference(...t) {
    return G.xor([this].concat(t)).map((r) => this.intersection(r)).filter((r) => r && !r.isEmpty());
  }
  toString() {
    return this.isValid ? `[${this.s.toISO()} \u2013 ${this.e.toISO()})` : Ie;
  }
  toISO(t) {
    return this.isValid ? `${this.s.toISO(t)}/${this.e.toISO(t)}` : Ie;
  }
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Ie;
  }
  toISOTime(t) {
    return this.isValid ? `${this.s.toISOTime(t)}/${this.e.toISOTime(t)}` : Ie;
  }
  toFormat(t, { separator: r = " \u2013 " } = {}) {
    return this.isValid ? `${this.s.toFormat(t)}${r}${this.e.toFormat(t)}` : Ie;
  }
  toDuration(t, r) {
    return this.isValid ? this.e.diff(this.s, t, r) : D.invalid(this.invalidReason);
  }
  mapEndpoints(t) {
    return G.fromDateTimes(t(this.s), t(this.e));
  }
}
class $e {
  static hasDST(t = $.defaultZone) {
    const r = O.now().setZone(t).set({ month: 12 });
    return !t.isUniversal && r.offset !== r.set({ month: 6 }).offset;
  }
  static isValidIANAZone(t) {
    return Zt.isValidZone(t);
  }
  static normalizeZone(t) {
    return Yt(t, $.defaultZone);
  }
  static months(t = "long", { locale: r = null, numberingSystem: n = null, locObj: i = null, outputCalendar: a = "gregory" } = {}) {
    return (i || W.create(r, n, a)).months(t);
  }
  static monthsFormat(t = "long", { locale: r = null, numberingSystem: n = null, locObj: i = null, outputCalendar: a = "gregory" } = {}) {
    return (i || W.create(r, n, a)).months(t, !0);
  }
  static weekdays(t = "long", { locale: r = null, numberingSystem: n = null, locObj: i = null } = {}) {
    return (i || W.create(r, n, null)).weekdays(t);
  }
  static weekdaysFormat(t = "long", { locale: r = null, numberingSystem: n = null, locObj: i = null } = {}) {
    return (i || W.create(r, n, null)).weekdays(t, !0);
  }
  static meridiems({ locale: t = null } = {}) {
    return W.create(t).meridiems();
  }
  static eras(t = "short", { locale: r = null } = {}) {
    return W.create(r, null, "gregory").eras(t);
  }
  static features() {
    return { relative: Li() };
  }
}
function On(e, t) {
  const r = (i) => i.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), n = r(t) - r(e);
  return Math.floor(D.fromMillis(n).as("days"));
}
function qs(e, t, r) {
  const n = [
    ["years", (s, l) => l.year - s.year],
    ["quarters", (s, l) => l.quarter - s.quarter + (l.year - s.year) * 4],
    ["months", (s, l) => l.month - s.month + (l.year - s.year) * 12],
    [
      "weeks",
      (s, l) => {
        const u = On(s, l);
        return (u - u % 7) / 7;
      }
    ],
    ["days", On]
  ], i = {};
  let a, o;
  for (const [s, l] of n)
    if (r.indexOf(s) >= 0) {
      a = s;
      let u = l(e, t);
      o = e.plus({ [s]: u }), o > t ? (e = e.plus({ [s]: u - 1 }), u -= 1) : e = o, i[s] = u;
    }
  return [e, i, o, a];
}
function Qs(e, t, r, n) {
  let [i, a, o, s] = qs(e, t, r);
  const l = t - i, u = r.filter(
    (y) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(y) >= 0
  );
  u.length === 0 && (o < t && (o = i.plus({ [s]: 1 })), o !== i && (a[s] = (a[s] || 0) + l / (o - i)));
  const f = D.fromObject(a, n);
  return u.length > 0 ? D.fromMillis(l, n).shiftTo(...u).plus(f) : f;
}
const nn = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
}, Mn = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, Ks = nn.hanidec.replace(/[\[|\]]/g, "").split("");
function $s(e) {
  let t = parseInt(e, 10);
  if (isNaN(t)) {
    t = "";
    for (let r = 0; r < e.length; r++) {
      const n = e.charCodeAt(r);
      if (e[r].search(nn.hanidec) !== -1)
        t += Ks.indexOf(e[r]);
      else
        for (const i in Mn) {
          const [a, o] = Mn[i];
          n >= a && n <= o && (t += n - a);
        }
    }
    return parseInt(t, 10);
  } else
    return t;
}
function Tt({ numberingSystem: e }, t = "") {
  return new RegExp(`${nn[e || "latn"]}${t}`);
}
const tl = "missing Intl.DateTimeFormat.formatToParts support";
function j(e, t = (r) => r) {
  return { regex: e, deser: ([r]) => t($s(r)) };
}
const el = String.fromCharCode(160), $i = `[ ${el}]`, ta = new RegExp($i, "g");
function rl(e) {
  return e.replace(/\./g, "\\.?").replace(ta, $i);
}
function In(e) {
  return e.replace(/\./g, "").replace(ta, " ").toLowerCase();
}
function Ot(e, t) {
  return e === null ? null : {
    regex: RegExp(e.map(rl).join("|")),
    deser: ([r]) => e.findIndex((n) => In(r) === In(n)) + t
  };
}
function kn(e, t) {
  return { regex: e, deser: ([, r, n]) => vr(r, n), groups: t };
}
function Nr(e) {
  return { regex: e, deser: ([t]) => t };
}
function nl(e) {
  return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function il(e, t) {
  const r = Tt(t), n = Tt(t, "{2}"), i = Tt(t, "{3}"), a = Tt(t, "{4}"), o = Tt(t, "{6}"), s = Tt(t, "{1,2}"), l = Tt(t, "{1,3}"), u = Tt(t, "{1,6}"), f = Tt(t, "{1,9}"), y = Tt(t, "{2,4}"), d = Tt(t, "{4,6}"), m = (k) => ({ regex: RegExp(nl(k.val)), deser: ([S]) => S, literal: !0 }), M = ((k) => {
    if (e.literal)
      return m(k);
    switch (k.val) {
      case "G":
        return Ot(t.eras("short", !1), 0);
      case "GG":
        return Ot(t.eras("long", !1), 0);
      case "y":
        return j(u);
      case "yy":
        return j(y, Wr);
      case "yyyy":
        return j(a);
      case "yyyyy":
        return j(d);
      case "yyyyyy":
        return j(o);
      case "M":
        return j(s);
      case "MM":
        return j(n);
      case "MMM":
        return Ot(t.months("short", !0, !1), 1);
      case "MMMM":
        return Ot(t.months("long", !0, !1), 1);
      case "L":
        return j(s);
      case "LL":
        return j(n);
      case "LLL":
        return Ot(t.months("short", !1, !1), 1);
      case "LLLL":
        return Ot(t.months("long", !1, !1), 1);
      case "d":
        return j(s);
      case "dd":
        return j(n);
      case "o":
        return j(l);
      case "ooo":
        return j(i);
      case "HH":
        return j(n);
      case "H":
        return j(s);
      case "hh":
        return j(n);
      case "h":
        return j(s);
      case "mm":
        return j(n);
      case "m":
        return j(s);
      case "q":
        return j(s);
      case "qq":
        return j(n);
      case "s":
        return j(s);
      case "ss":
        return j(n);
      case "S":
        return j(l);
      case "SSS":
        return j(i);
      case "u":
        return Nr(f);
      case "uu":
        return Nr(s);
      case "uuu":
        return j(r);
      case "a":
        return Ot(t.meridiems(), 0);
      case "kkkk":
        return j(a);
      case "kk":
        return j(y, Wr);
      case "W":
        return j(s);
      case "WW":
        return j(n);
      case "E":
      case "c":
        return j(r);
      case "EEE":
        return Ot(t.weekdays("short", !1, !1), 1);
      case "EEEE":
        return Ot(t.weekdays("long", !1, !1), 1);
      case "ccc":
        return Ot(t.weekdays("short", !0, !1), 1);
      case "cccc":
        return Ot(t.weekdays("long", !0, !1), 1);
      case "Z":
      case "ZZ":
        return kn(new RegExp(`([+-]${s.source})(?::(${n.source}))?`), 2);
      case "ZZZ":
        return kn(new RegExp(`([+-]${s.source})(${n.source})?`), 2);
      case "z":
        return Nr(/[a-z_+-/]{1,256}?/i);
      default:
        return m(k);
    }
  })(e) || {
    invalidReason: tl
  };
  return M.token = e, M;
}
const al = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function ol(e, t, r) {
  const { type: n, value: i } = e;
  if (n === "literal")
    return {
      literal: !0,
      val: i
    };
  const a = r[n];
  let o = al[n];
  if (typeof o == "object" && (o = o[a]), o)
    return {
      literal: !1,
      val: o
    };
}
function sl(e) {
  return [`^${e.map((r) => r.regex).reduce((r, n) => `${r}(${n.source})`, "")}$`, e];
}
function ll(e, t, r) {
  const n = e.match(t);
  if (n) {
    const i = {};
    let a = 1;
    for (const o in r)
      if (de(r, o)) {
        const s = r[o], l = s.groups ? s.groups + 1 : 1;
        !s.literal && s.token && (i[s.token.val[0]] = s.deser(n.slice(a, a + l))), a += l;
      }
    return [n, i];
  } else
    return [n, {}];
}
function ul(e) {
  const t = (a) => {
    switch (a) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let r = null, n;
  return F(e.z) || (r = Zt.create(e.z)), F(e.Z) || (r || (r = new at(e.Z)), n = e.Z), F(e.q) || (e.M = (e.q - 1) * 3 + 1), F(e.h) || (e.h < 12 && e.a === 1 ? e.h += 12 : e.h === 12 && e.a === 0 && (e.h = 0)), e.G === 0 && e.y && (e.y = -e.y), F(e.u) || (e.S = Qr(e.u)), [Object.keys(e).reduce((a, o) => {
    const s = t(o);
    return s && (a[s] = e[o]), a;
  }, {}), r, n];
}
let Cr = null;
function cl() {
  return Cr || (Cr = O.fromMillis(1555555555555)), Cr;
}
function fl(e, t) {
  if (e.literal)
    return e;
  const r = it.macroTokenToFormatOpts(e.val), n = na(r, t);
  return n == null || n.includes(void 0) ? e : n;
}
function ea(e, t) {
  return Array.prototype.concat(...e.map((r) => fl(r, t)));
}
function ra(e, t, r) {
  const n = ea(it.parseFormat(r), e), i = n.map((o) => il(o, e)), a = i.find((o) => o.invalidReason);
  if (a)
    return { input: t, tokens: n, invalidReason: a.invalidReason };
  {
    const [o, s] = sl(i), l = RegExp(o, "i"), [u, f] = ll(t, l, s), [y, d, m] = f ? ul(f) : [null, null, void 0];
    if (de(f, "a") && de(f, "H"))
      throw new Ee(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: t, tokens: n, regex: l, rawMatches: u, matches: f, result: y, zone: d, specificOffset: m };
  }
}
function hl(e, t, r) {
  const { result: n, zone: i, specificOffset: a, invalidReason: o } = ra(e, t, r);
  return [n, i, a, o];
}
function na(e, t) {
  return e ? it.create(t, e).formatDateTimeParts(cl()).map((i) => ol(i, t, e)) : null;
}
const ia = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], aa = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function bt(e, t) {
  return new Mt(
    "unit out of range",
    `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`
  );
}
function oa(e, t, r) {
  const n = new Date(Date.UTC(e, t - 1, r));
  e < 100 && e >= 0 && n.setUTCFullYear(n.getUTCFullYear() - 1900);
  const i = n.getUTCDay();
  return i === 0 ? 7 : i;
}
function sa(e, t, r) {
  return r + (Ge(e) ? aa : ia)[t - 1];
}
function la(e, t) {
  const r = Ge(e) ? aa : ia, n = r.findIndex((a) => a < t), i = t - r[n];
  return { month: n + 1, day: i };
}
function Yr(e) {
  const { year: t, month: r, day: n } = e, i = sa(t, r, n), a = oa(t, r, n);
  let o = Math.floor((i - a + 10) / 7), s;
  return o < 1 ? (s = t - 1, o = cr(s)) : o > cr(t) ? (s = t + 1, o = 1) : s = t, { weekYear: s, weekNumber: o, weekday: a, ...br(e) };
}
function Nn(e) {
  const { weekYear: t, weekNumber: r, weekday: n } = e, i = oa(t, 1, 4), a = Re(t);
  let o = r * 7 + n - i - 3, s;
  o < 1 ? (s = t - 1, o += Re(s)) : o > a ? (s = t + 1, o -= Re(t)) : s = t;
  const { month: l, day: u } = la(s, o);
  return { year: s, month: l, day: u, ...br(e) };
}
function Fr(e) {
  const { year: t, month: r, day: n } = e, i = sa(t, r, n);
  return { year: t, ordinal: i, ...br(e) };
}
function Cn(e) {
  const { year: t, ordinal: r } = e, { month: n, day: i } = la(t, r);
  return { year: t, month: n, day: i, ...br(e) };
}
function dl(e) {
  const t = yr(e.weekYear), r = zt(e.weekNumber, 1, cr(e.weekYear)), n = zt(e.weekday, 1, 7);
  return t ? r ? n ? !1 : bt("weekday", e.weekday) : bt("week", e.week) : bt("weekYear", e.weekYear);
}
function ml(e) {
  const t = yr(e.year), r = zt(e.ordinal, 1, Re(e.year));
  return t ? r ? !1 : bt("ordinal", e.ordinal) : bt("year", e.year);
}
function ua(e) {
  const t = yr(e.year), r = zt(e.month, 1, 12), n = zt(e.day, 1, ur(e.year, e.month));
  return t ? r ? n ? !1 : bt("day", e.day) : bt("month", e.month) : bt("year", e.year);
}
function ca(e) {
  const { hour: t, minute: r, second: n, millisecond: i } = e, a = zt(t, 0, 23) || t === 24 && r === 0 && n === 0 && i === 0, o = zt(r, 0, 59), s = zt(n, 0, 59), l = zt(i, 0, 999);
  return a ? o ? s ? l ? !1 : bt("millisecond", i) : bt("second", n) : bt("minute", r) : bt("hour", t);
}
const Er = "Invalid DateTime", Fn = 864e13;
function tr(e) {
  return new Mt("unsupported zone", `the zone "${e.name}" is not supported`);
}
function Dr(e) {
  return e.weekData === null && (e.weekData = Yr(e.c)), e.weekData;
}
function ke(e, t) {
  const r = {
    ts: e.ts,
    zone: e.zone,
    c: e.c,
    o: e.o,
    loc: e.loc,
    invalid: e.invalid
  };
  return new O({ ...r, ...t, old: r });
}
function fa(e, t, r) {
  let n = e - t * 60 * 1e3;
  const i = r.offset(n);
  if (t === i)
    return [n, t];
  n -= (i - t) * 60 * 1e3;
  const a = r.offset(n);
  return i === a ? [n, i] : [e - Math.min(i, a) * 60 * 1e3, Math.max(i, a)];
}
function En(e, t) {
  e += t * 60 * 1e3;
  const r = new Date(e);
  return {
    year: r.getUTCFullYear(),
    month: r.getUTCMonth() + 1,
    day: r.getUTCDate(),
    hour: r.getUTCHours(),
    minute: r.getUTCMinutes(),
    second: r.getUTCSeconds(),
    millisecond: r.getUTCMilliseconds()
  };
}
function sr(e, t, r) {
  return fa($r(e), t, r);
}
function Dn(e, t) {
  const r = e.o, n = e.c.year + Math.trunc(t.years), i = e.c.month + Math.trunc(t.months) + Math.trunc(t.quarters) * 3, a = {
    ...e.c,
    year: n,
    month: i,
    day: Math.min(e.c.day, ur(n, i)) + Math.trunc(t.days) + Math.trunc(t.weeks) * 7
  }, o = D.fromObject({
    years: t.years - Math.trunc(t.years),
    quarters: t.quarters - Math.trunc(t.quarters),
    months: t.months - Math.trunc(t.months),
    weeks: t.weeks - Math.trunc(t.weeks),
    days: t.days - Math.trunc(t.days),
    hours: t.hours,
    minutes: t.minutes,
    seconds: t.seconds,
    milliseconds: t.milliseconds
  }).as("milliseconds"), s = $r(a);
  let [l, u] = fa(s, r, e.zone);
  return o !== 0 && (l += o, u = e.zone.offset(l)), { ts: l, o: u };
}
function Ne(e, t, r, n, i, a) {
  const { setZone: o, zone: s } = r;
  if (e && Object.keys(e).length !== 0) {
    const l = t || s, u = O.fromObject(e, {
      ...r,
      zone: l,
      specificOffset: a
    });
    return o ? u : u.setZone(s);
  } else
    return O.invalid(
      new Mt("unparsable", `the input "${i}" can't be parsed as ${n}`)
    );
}
function er(e, t, r = !0) {
  return e.isValid ? it.create(W.create("en-US"), {
    allowZ: r,
    forceSimple: !0
  }).formatDateTimeFromString(e, t) : null;
}
function jr(e, t) {
  const r = e.c.year > 9999 || e.c.year < 0;
  let n = "";
  return r && e.c.year >= 0 && (n += "+"), n += Q(e.c.year, r ? 6 : 4), t ? (n += "-", n += Q(e.c.month), n += "-", n += Q(e.c.day)) : (n += Q(e.c.month), n += Q(e.c.day)), n;
}
function jn(e, t, r, n, i, a) {
  let o = Q(e.c.hour);
  return t ? (o += ":", o += Q(e.c.minute), (e.c.second !== 0 || !r) && (o += ":")) : o += Q(e.c.minute), (e.c.second !== 0 || !r) && (o += Q(e.c.second), (e.c.millisecond !== 0 || !n) && (o += ".", o += Q(e.c.millisecond, 3))), i && (e.isOffsetFixed && e.offset === 0 && !a ? o += "Z" : e.o < 0 ? (o += "-", o += Q(Math.trunc(-e.o / 60)), o += ":", o += Q(Math.trunc(-e.o % 60))) : (o += "+", o += Q(Math.trunc(e.o / 60)), o += ":", o += Q(Math.trunc(e.o % 60)))), a && (o += "[" + e.zone.ianaName + "]"), o;
}
const ha = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, gl = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, pl = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, da = ["year", "month", "day", "hour", "minute", "second", "millisecond"], yl = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], vl = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Ln(e) {
  const t = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[e.toLowerCase()];
  if (!t)
    throw new gi(e);
  return t;
}
function Rn(e, t) {
  const r = Yt(t.zone, $.defaultZone), n = W.fromObject(t), i = $.now();
  let a, o;
  if (F(e.year))
    a = i;
  else {
    for (const u of da)
      F(e[u]) && (e[u] = ha[u]);
    const s = ua(e) || ca(e);
    if (s)
      return O.invalid(s);
    const l = r.offset(i);
    [a, o] = sr(e, l, r);
  }
  return new O({ ts: a, zone: r, loc: n, o });
}
function zn(e, t, r) {
  const n = F(r.round) ? !0 : r.round, i = (o, s) => (o = Kr(o, n || r.calendary ? 0 : 2, !0), t.loc.clone(r).relFormatter(r).format(o, s)), a = (o) => r.calendary ? t.hasSame(e, o) ? 0 : t.startOf(o).diff(e.startOf(o), o).get(o) : t.diff(e, o).get(o);
  if (r.unit)
    return i(a(r.unit), r.unit);
  for (const o of r.units) {
    const s = a(o);
    if (Math.abs(s) >= 1)
      return i(s, o);
  }
  return i(e > t ? -0 : 0, r.units[r.units.length - 1]);
}
function Zn(e) {
  let t = {}, r;
  return e.length > 0 && typeof e[e.length - 1] == "object" ? (t = e[e.length - 1], r = Array.from(e).slice(0, e.length - 1)) : r = Array.from(e), [t, r];
}
class O {
  constructor(t) {
    const r = t.zone || $.defaultZone;
    let n = t.invalid || (Number.isNaN(t.ts) ? new Mt("invalid input") : null) || (r.isValid ? null : tr(r));
    this.ts = F(t.ts) ? $.now() : t.ts;
    let i = null, a = null;
    if (!n)
      if (t.old && t.old.ts === this.ts && t.old.zone.equals(r))
        [i, a] = [t.old.c, t.old.o];
      else {
        const s = r.offset(this.ts);
        i = En(this.ts, s), n = Number.isNaN(i.year) ? new Mt("invalid input") : null, i = n ? null : i, a = n ? null : s;
      }
    this._zone = r, this.loc = t.loc || W.create(), this.invalid = n, this.weekData = null, this.c = i, this.o = a, this.isLuxonDateTime = !0;
  }
  static now() {
    return new O({});
  }
  static local() {
    const [t, r] = Zn(arguments), [n, i, a, o, s, l, u] = r;
    return Rn({ year: n, month: i, day: a, hour: o, minute: s, second: l, millisecond: u }, t);
  }
  static utc() {
    const [t, r] = Zn(arguments), [n, i, a, o, s, l, u] = r;
    return t.zone = at.utcInstance, Rn({ year: n, month: i, day: a, hour: o, minute: s, second: l, millisecond: u }, t);
  }
  static fromJSDate(t, r = {}) {
    const n = Io(t) ? t.valueOf() : NaN;
    if (Number.isNaN(n))
      return O.invalid("invalid input");
    const i = Yt(r.zone, $.defaultZone);
    return i.isValid ? new O({
      ts: n,
      zone: i,
      loc: W.fromObject(r)
    }) : O.invalid(tr(i));
  }
  static fromMillis(t, r = {}) {
    if ($t(t))
      return t < -Fn || t > Fn ? O.invalid("Timestamp out of range") : new O({
        ts: t,
        zone: Yt(r.zone, $.defaultZone),
        loc: W.fromObject(r)
      });
    throw new pt(
      `fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`
    );
  }
  static fromSeconds(t, r = {}) {
    if ($t(t))
      return new O({
        ts: t * 1e3,
        zone: Yt(r.zone, $.defaultZone),
        loc: W.fromObject(r)
      });
    throw new pt("fromSeconds requires a numerical input");
  }
  static fromObject(t, r = {}) {
    t = t || {};
    const n = Yt(r.zone, $.defaultZone);
    if (!n.isValid)
      return O.invalid(tr(n));
    const i = $.now(), a = F(r.specificOffset) ? n.offset(i) : r.specificOffset, o = fr(t, Ln), s = !F(o.ordinal), l = !F(o.year), u = !F(o.month) || !F(o.day), f = l || u, y = o.weekYear || o.weekNumber, d = W.fromObject(r);
    if ((f || s) && y)
      throw new Ee(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (u && s)
      throw new Ee("Can't mix ordinal dates with month/day");
    const m = y || o.weekday && !f;
    let v, M, k = En(i, a);
    m ? (v = yl, M = gl, k = Yr(k)) : s ? (v = vl, M = pl, k = Fr(k)) : (v = da, M = ha);
    let S = !1;
    for (const et of v) {
      const ut = o[et];
      F(ut) ? S ? o[et] = M[et] : o[et] = k[et] : S = !0;
    }
    const A = m ? dl(o) : s ? ml(o) : ua(o), C = A || ca(o);
    if (C)
      return O.invalid(C);
    const V = m ? Nn(o) : s ? Cn(o) : o, [Y, _] = sr(V, a, n), tt = new O({
      ts: Y,
      zone: n,
      o: _,
      loc: d
    });
    return o.weekday && f && t.weekday !== tt.weekday ? O.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${o.weekday} and a date of ${tt.toISO()}`
    ) : tt;
  }
  static fromISO(t, r = {}) {
    const [n, i] = Ds(t);
    return Ne(n, i, r, "ISO 8601", t);
  }
  static fromRFC2822(t, r = {}) {
    const [n, i] = js(t);
    return Ne(n, i, r, "RFC 2822", t);
  }
  static fromHTTP(t, r = {}) {
    const [n, i] = Ls(t);
    return Ne(n, i, r, "HTTP", r);
  }
  static fromFormat(t, r, n = {}) {
    if (F(t) || F(r))
      throw new pt("fromFormat requires an input string and a format");
    const { locale: i = null, numberingSystem: a = null } = n, o = W.fromOpts({
      locale: i,
      numberingSystem: a,
      defaultToEN: !0
    }), [s, l, u, f] = hl(o, t, r);
    return f ? O.invalid(f) : Ne(s, l, n, `format ${r}`, t, u);
  }
  static fromString(t, r, n = {}) {
    return O.fromFormat(t, r, n);
  }
  static fromSQL(t, r = {}) {
    const [n, i] = Vs(t);
    return Ne(n, i, r, "SQL", t);
  }
  static invalid(t, r = null) {
    if (!t)
      throw new pt("need to specify a reason the DateTime is invalid");
    const n = t instanceof Mt ? t : new Mt(t, r);
    if ($.throwOnInvalid)
      throw new xo(n);
    return new O({ invalid: n });
  }
  static isDateTime(t) {
    return t && t.isLuxonDateTime || !1;
  }
  static parseFormatForOpts(t, r = {}) {
    const n = na(t, W.fromObject(r));
    return n ? n.map((i) => i ? i.val : null).join("") : null;
  }
  static expandFormat(t, r = {}) {
    return ea(it.parseFormat(t), W.fromObject(r)).map((i) => i.val).join("");
  }
  get(t) {
    return this[t];
  }
  get isValid() {
    return this.invalid === null;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? Dr(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? Dr(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? Dr(this).weekday : NaN;
  }
  get ordinal() {
    return this.isValid ? Fr(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid ? $e.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  get monthLong() {
    return this.isValid ? $e.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  get weekdayShort() {
    return this.isValid ? $e.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get weekdayLong() {
    return this.isValid ? $e.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  get isInLeapYear() {
    return Ge(this.year);
  }
  get daysInMonth() {
    return ur(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? Re(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? cr(this.weekYear) : NaN;
  }
  resolvedLocaleOptions(t = {}) {
    const { locale: r, numberingSystem: n, calendar: i } = it.create(
      this.loc.clone(t),
      t
    ).resolvedOptions(this);
    return { locale: r, numberingSystem: n, outputCalendar: i };
  }
  toUTC(t = 0, r = {}) {
    return this.setZone(at.instance(t), r);
  }
  toLocal() {
    return this.setZone($.defaultZone);
  }
  setZone(t, { keepLocalTime: r = !1, keepCalendarTime: n = !1 } = {}) {
    if (t = Yt(t, $.defaultZone), t.equals(this.zone))
      return this;
    if (t.isValid) {
      let i = this.ts;
      if (r || n) {
        const a = t.offset(this.ts), o = this.toObject();
        [i] = sr(o, a, t);
      }
      return ke(this, { ts: i, zone: t });
    } else
      return O.invalid(tr(t));
  }
  reconfigure({ locale: t, numberingSystem: r, outputCalendar: n } = {}) {
    const i = this.loc.clone({ locale: t, numberingSystem: r, outputCalendar: n });
    return ke(this, { loc: i });
  }
  setLocale(t) {
    return this.reconfigure({ locale: t });
  }
  set(t) {
    if (!this.isValid)
      return this;
    const r = fr(t, Ln), n = !F(r.weekYear) || !F(r.weekNumber) || !F(r.weekday), i = !F(r.ordinal), a = !F(r.year), o = !F(r.month) || !F(r.day), s = a || o, l = r.weekYear || r.weekNumber;
    if ((s || i) && l)
      throw new Ee(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (o && i)
      throw new Ee("Can't mix ordinal dates with month/day");
    let u;
    n ? u = Nn({ ...Yr(this.c), ...r }) : F(r.ordinal) ? (u = { ...this.toObject(), ...r }, F(r.day) && (u.day = Math.min(ur(u.year, u.month), u.day))) : u = Cn({ ...Fr(this.c), ...r });
    const [f, y] = sr(u, this.o, this.zone);
    return ke(this, { ts: f, o: y });
  }
  plus(t) {
    if (!this.isValid)
      return this;
    const r = D.fromDurationLike(t);
    return ke(this, Dn(this, r));
  }
  minus(t) {
    if (!this.isValid)
      return this;
    const r = D.fromDurationLike(t).negate();
    return ke(this, Dn(this, r));
  }
  startOf(t) {
    if (!this.isValid)
      return this;
    const r = {}, n = D.normalizeUnit(t);
    switch (n) {
      case "years":
        r.month = 1;
      case "quarters":
      case "months":
        r.day = 1;
      case "weeks":
      case "days":
        r.hour = 0;
      case "hours":
        r.minute = 0;
      case "minutes":
        r.second = 0;
      case "seconds":
        r.millisecond = 0;
        break;
    }
    if (n === "weeks" && (r.weekday = 1), n === "quarters") {
      const i = Math.ceil(this.month / 3);
      r.month = (i - 1) * 3 + 1;
    }
    return this.set(r);
  }
  endOf(t) {
    return this.isValid ? this.plus({ [t]: 1 }).startOf(t).minus(1) : this;
  }
  toFormat(t, r = {}) {
    return this.isValid ? it.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this, t) : Er;
  }
  toLocaleString(t = Zr, r = {}) {
    return this.isValid ? it.create(this.loc.clone(r), t).formatDateTime(this) : Er;
  }
  toLocaleParts(t = {}) {
    return this.isValid ? it.create(this.loc.clone(t), t).formatDateTimeParts(this) : [];
  }
  toISO({
    format: t = "extended",
    suppressSeconds: r = !1,
    suppressMilliseconds: n = !1,
    includeOffset: i = !0,
    extendedZone: a = !1
  } = {}) {
    if (!this.isValid)
      return null;
    const o = t === "extended";
    let s = jr(this, o);
    return s += "T", s += jn(this, o, r, n, i, a), s;
  }
  toISODate({ format: t = "extended" } = {}) {
    return this.isValid ? jr(this, t === "extended") : null;
  }
  toISOWeekDate() {
    return er(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds: t = !1,
    suppressSeconds: r = !1,
    includeOffset: n = !0,
    includePrefix: i = !1,
    extendedZone: a = !1,
    format: o = "extended"
  } = {}) {
    return this.isValid ? (i ? "T" : "") + jn(
      this,
      o === "extended",
      r,
      t,
      n,
      a
    ) : null;
  }
  toRFC2822() {
    return er(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  toHTTP() {
    return er(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return this.isValid ? jr(this, !0) : null;
  }
  toSQLTime({ includeOffset: t = !0, includeZone: r = !1, includeOffsetSpace: n = !0 } = {}) {
    let i = "HH:mm:ss.SSS";
    return (r || t) && (n && (i += " "), r ? i += "z" : t && (i += "ZZ")), er(this, i, !0);
  }
  toSQL(t = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(t)}` : null;
  }
  toString() {
    return this.isValid ? this.toISO() : Er;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(t = {}) {
    if (!this.isValid)
      return {};
    const r = { ...this.c };
    return t.includeConfig && (r.outputCalendar = this.outputCalendar, r.numberingSystem = this.loc.numberingSystem, r.locale = this.loc.locale), r;
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(t, r = "milliseconds", n = {}) {
    if (!this.isValid || !t.isValid)
      return D.invalid("created by diffing an invalid DateTime");
    const i = { locale: this.locale, numberingSystem: this.numberingSystem, ...n }, a = ko(r).map(D.normalizeUnit), o = t.valueOf() > this.valueOf(), s = o ? this : t, l = o ? t : this, u = Qs(s, l, a, i);
    return o ? u.negate() : u;
  }
  diffNow(t = "milliseconds", r = {}) {
    return this.diff(O.now(), t, r);
  }
  until(t) {
    return this.isValid ? G.fromDateTimes(this, t) : this;
  }
  hasSame(t, r) {
    if (!this.isValid)
      return !1;
    const n = t.valueOf(), i = this.setZone(t.zone, { keepLocalTime: !0 });
    return i.startOf(r) <= n && n <= i.endOf(r);
  }
  equals(t) {
    return this.isValid && t.isValid && this.valueOf() === t.valueOf() && this.zone.equals(t.zone) && this.loc.equals(t.loc);
  }
  toRelative(t = {}) {
    if (!this.isValid)
      return null;
    const r = t.base || O.fromObject({}, { zone: this.zone }), n = t.padding ? this < r ? -t.padding : t.padding : 0;
    let i = ["years", "months", "days", "hours", "minutes", "seconds"], a = t.unit;
    return Array.isArray(t.unit) && (i = t.unit, a = void 0), zn(r, this.plus(n), {
      ...t,
      numeric: "always",
      units: i,
      unit: a
    });
  }
  toRelativeCalendar(t = {}) {
    return this.isValid ? zn(t.base || O.fromObject({}, { zone: this.zone }), this, {
      ...t,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  static min(...t) {
    if (!t.every(O.isDateTime))
      throw new pt("min requires all arguments be DateTimes");
    return gn(t, (r) => r.valueOf(), Math.min);
  }
  static max(...t) {
    if (!t.every(O.isDateTime))
      throw new pt("max requires all arguments be DateTimes");
    return gn(t, (r) => r.valueOf(), Math.max);
  }
  static fromFormatExplain(t, r, n = {}) {
    const { locale: i = null, numberingSystem: a = null } = n, o = W.fromOpts({
      locale: i,
      numberingSystem: a,
      defaultToEN: !0
    });
    return ra(o, t, r);
  }
  static fromStringExplain(t, r, n = {}) {
    return O.fromFormatExplain(t, r, n);
  }
  static get DATE_SHORT() {
    return Zr;
  }
  static get DATE_MED() {
    return pi;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return To;
  }
  static get DATE_FULL() {
    return yi;
  }
  static get DATE_HUGE() {
    return vi;
  }
  static get TIME_SIMPLE() {
    return bi;
  }
  static get TIME_WITH_SECONDS() {
    return wi;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return xi;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return Si;
  }
  static get TIME_24_SIMPLE() {
    return Ai;
  }
  static get TIME_24_WITH_SECONDS() {
    return Ti;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Oi;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return Mi;
  }
  static get DATETIME_SHORT() {
    return Ii;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return ki;
  }
  static get DATETIME_MED() {
    return Ni;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return Ci;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return Oo;
  }
  static get DATETIME_FULL() {
    return Fi;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return Ei;
  }
  static get DATETIME_HUGE() {
    return Di;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return ji;
  }
}
function Ce(e) {
  if (O.isDateTime(e))
    return e;
  if (e && e.valueOf && $t(e.valueOf()))
    return O.fromJSDate(e);
  if (e && typeof e == "object")
    return O.fromObject(e);
  throw new pt(
    `Unknown datetime argument: ${e}, of type ${typeof e}`
  );
}
const Kt = {};
Kt.formatTime = {
  YMDHMS: (e) => (e ? O.fromJSDate(new Date(e)) : O.now()).toFormat("yyyy-MM-dd TT"),
  YMDHM: (e) => (e ? O.fromJSDate(new Date(e)) : O.now()).toFormat("yyyy-MM-dd T"),
  YMD: (e) => (e ? O.fromJSDate(new Date(e)) : O.now()).toFormat("yyyy-MM-dd"),
  MD: (e) => (e ? O.fromJSDate(new Date(e)) : O.now()).toFormat("MM-dd"),
  HM: (e) => (e ? O.fromJSDate(new Date(e)) : O.now()).toFormat("HH:mm"),
  HMS: (e) => (e ? O.fromJSDate(new Date(e)) : O.now()).toFormat("HH:mm:ss")
};
Kt.sessionStorage = {
  get(e) {
    return sessionStorage.getItem(e);
  },
  set(e, t) {
    (t == null ? void 0 : t.toString()) !== t && (t = JSON.stringify(t)), sessionStorage.setItem(e, t);
  },
  del(e) {
    sessionStorage.removeItem(e);
  },
  clear() {
    sessionStorage.clear();
  }
};
Kt.localStorage = {
  get(e) {
    return localStorage.getItem(e);
  },
  set(e, t) {
    (t == null ? void 0 : t.toString()) !== t && (t = JSON.stringify(t)), localStorage.setItem(e, t);
  },
  del(e) {
    localStorage.removeItem(e);
  },
  clear() {
    localStorage.clear();
  }
};
function Wn(e, t, r, n) {
  return !e.annotation || !e.annotation.regionFilter || !Array.isArray(e.annotation.regionFilter) ? [] : e.annotation.regionFilter.map((i) => {
    var y, d;
    let a = 0, o = 0;
    if (!i.start || !i.end)
      return i;
    const s = i.start[0], l = i.end[0], u = t.filter((m) => m <= s), f = t.filter((m) => m >= l);
    return a = (y = u[u.length - 1]) != null ? y : t[0], o = (d = f[0]) != null ? d : t[t.length - 1], {
      ...i,
      start: [r(a), i.start[1]],
      end: [r(o), i.end[1]],
      color: n
    };
  });
}
function Rt(e, t, r, n) {
  const i = r * 1e3;
  let a = t[0].x;
  const o = t[t.length - 1].x, s = [], l = [];
  for (; a < o; ) {
    const f = t.find((y) => y.x >= a && y.x <= o);
    s.push({
      x: a,
      y: f == null ? void 0 : f.y,
      s: f == null ? void 0 : f.s
    }), l.push(a), a += i;
  }
  return t[t.length - 1].x - t[0].x <= 42e4 ? {
    data: s.map((f) => ({
      x: Kt.formatTime.HMS(f.x),
      y: f.y,
      s: f.s
    })),
    regionFilter: Wn(e, l, Kt.formatTime.HMS, n)
  } : {
    data: s.map((f) => ({
      x: Kt.formatTime.HM(f.x),
      y: f.y,
      s: f.s
    })),
    regionFilter: Wn(e, l, Kt.formatTime.HM, n)
  };
}
function Pn(e, t, r) {
  if (e.data.length < 2)
    return e;
  let n = Math.floor((e.data.length - 1) * t[0]), i = Math.floor((e.data.length - 1) * t[1]);
  switch (!0) {
    case (n === i && n === 0):
      i = 1;
      break;
    case (n === i && n === e.data.length - 1):
      n -= 1;
      break;
    case n === i:
      i += 1;
      break;
  }
  const a = e.data.slice(n, i + 1), o = a[a.length - 1].x - a[0].x;
  let s = {
    data: [],
    regionFilter: []
  };
  switch (!0) {
    case o >= 1e3 * 60 * 60 * 12:
      s = Rt(e, a, 600, r);
      break;
    case (o < 1e3 * 60 * 60 * 12 && o >= 1e3 * 60 * 60 * 6):
      s = Rt(e, a, 300, r);
      break;
    case (o < 1e3 * 60 * 60 * 6 && o >= 1e3 * 60 * 60 * 3):
      s = Rt(e, a, 180, r);
      break;
    case (o < 1e3 * 60 * 60 * 3 && o >= 1e3 * 60 * 60):
      s = Rt(e, a, 60, r);
      break;
    case (o < 1e3 * 60 * 60 && o >= 1e3 * 60 * 30):
      s = Rt(e, a, 30, r);
      break;
    case (o < 1e3 * 60 * 30 && o >= 1e3 * 60 * 10):
      s = Rt(e, a, 15, r);
      break;
    case (o < 1e3 * 60 * 10 && o >= 1e3 * 60 * 5):
      s = Rt(e, a, 10, r);
      break;
    case (o < 1e3 * 60 * 5 && o >= 1e3 * 60):
      s = Rt(e, a, 5, r);
      break;
    default:
      s = Rt(e, a, 3, r);
      break;
  }
  const l = e.data.map((m) => m.y), u = Math.min(...l), y = Math.max(...l) - u, d = [u];
  for (let m = 1; m < 6; m += 1)
    d[m] = Math.round(y * m / 5 + u);
  return e.axis.yAxis.scale = {
    min: u,
    ticks: d
  }, t[1] === 1 && s.data.push({
    x: "24:00",
    y: null,
    s: s.data[0].s
  }), e.data = s.data, e.annotation.regionFilter = s.regionFilter, e;
}
const ma = {
  blueDark: {
    default: {
      color: ["#1E91F5", "#8574F3", "#D0EBFF", "#2A93C7", "#5E85B2", "#E06FCF"],
      colorCopy: ["#1E91F5", "#8574F3", "#D0EBFF", "#2A93C7", "#5E85B2", "#E06FCF"],
      fillColor: ["l(270) 0:rgba(0,145,245,0)   1:rgba(30,145,245,1)", "l(270) 0:rgba(133,116,243,0)  1:rgba(133,116,243,1)", "l(270) 0:rgba(141,179,223,0)  1:rgba(141,179,223,1)", "l(270) 0:rgba(42,147,199,0)  1:rgba(42,147,199,1)", "l(270) 0:rgba(94,133,178,0)   1:rgba(94,133,178,1)", "l(270) 0:rgba(192,93,177,0)  1:rgba(192,93,177,1)"],
      axis: {
        xAxis: {
          tickLine: null,
          scale: {
            tickCount: 7,
            range: [0.02, 0.96]
          },
          label: {
            style: {
              fontSize: 16,
              fill: "rgba(162, 169, 180, 1)"
            },
            offsetY: 8,
            offsetX: 4
          },
          line: {
            style: {
              stroke: "rgba(57, 69, 106, 1)"
            }
          }
        },
        yAxis: {
          label: {
            style: {
              fontSize: 16,
              fill: "rgba(162, 169, 180, 1)"
            },
            offsetX: -4
          },
          unit: {
            position: ["-5%", "-10%"],
            style: {
              fontSize: 16,
              fill: "rgba(162, 169, 180, 1)"
            }
          },
          scale: {
            tickCount: 6,
            tickMethod: Ht,
            min: 0
          },
          grid: {
            line: {
              style: {
                stroke: "rgba(57, 69, 106, 0.4)",
                lineWidth: 1,
                lineDash: [3, 3]
              }
            }
          }
        }
      },
      tooltip: {
        crosshairs: {
          type: "x",
          line: {
            style: {
              lineWidth: 1.32,
              stroke: "l(90) 0:rgba(54, 110, 174,0.1)  1:rgba(129, 170, 212,0.8)",
              shadowColor: "rgb(238, 244, 255)",
              shadowBlur: 1.6
            }
          }
        },
        domStyles: {
          "g2-tooltip": {
            background: "rgba(159, 177, 245, 0.3)",
            fontSize: "14px",
            fontFamily: "Roboto",
            textAlign: "left",
            borderRadius: "10px",
            boxShadow: "none",
            padding: "15px 20px"
          },
          "g2-tooltip-title": {
            color: "rgba(255, 255, 255, 1)",
            fontSize: "14px"
          },
          "g2-tooltip-list": {
            textAlign: "left"
          },
          "g2-tooltip-marker": {
            display: "none",
            width: "0.2rem",
            height: "0.06rem",
            "border-radius": 0
          },
          "g2-tooltip-name": {
            color: "rgba(255, 255, 255, 0.7)",
            textAlign: "left"
          },
          "g2-tooltip-value": {
            color: "rgba(255, 255, 255, 1)",
            fontSize: "14px",
            marginLeft: "15px"
          },
          "g2-tooltip-unit": {
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "14px",
            marginLeft: "5px"
          }
        }
      },
      annotation: {
        image: [
          {
            src: le,
            start: ["00:00", "min"],
            end: ["00:00", "min"],
            offsetX: -7
          },
          {
            src: le,
            start: ["08:00", "min"],
            end: ["08:00", "min"],
            offsetX: -7
          },
          {
            src: le,
            start: ["16:00", "min"],
            end: ["16:00", "min"],
            offsetX: -7
          }
        ],
        line: [
          {
            style: {
              lineDash: [5, 2, 3, 5],
              lineWidth: 1.8,
              stroke: "rgba(133, 116, 243, 1)",
              fill: "transparent"
            }
          },
          {
            style: {
              lineDash: [5, 2, 3, 5],
              lineWidth: 1.8,
              stroke: "rgba(133, 116, 243, 1)",
              fill: "transparent"
            }
          }
        ],
        regionFilter: [
          {
            color: "rgba(42, 55, 82, 0.6)",
            top: !0,
            apply: ["area"]
          },
          {
            color: "rgba(42, 55, 82, 0.6)",
            top: !0,
            apply: ["area"]
          }
        ]
      }
    },
    circular: {
      color: ["#8574F3", "#1E91F5", "#D0EBFF", "#2A93C7", "#5E85B2", "#E06FCF"],
      coordinate: {
        interval: 0.02,
        radius: 1,
        innerRadius: 0.85
      },
      view: [
        {
          coordinate: {
            interval: 0.02,
            radius: 0.32,
            innerRadius: 0.8
          }
        }
      ]
    },
    dataExtract: {
      color: ["#1E91F5", "#8574F3", "#D0EBFF", "#2A93C7", "#5E85B2", "#E06FCF"],
      axis: {
        xAxis: {
          tickLine: null,
          scale: {
            tickMethod: (e) => {
              const t = [], r = e.values.length / 6;
              for (let n = 0; n < 6; n++)
                t.push(e.values[Math.floor(r * n)]);
              return t.push(e.values[e.values.length - 1]), t;
            },
            range: [0.02, 0.98]
          },
          slider: {
            massData: (e, t) => Pn(e, t, "#9FB1F5")
          },
          label: {
            style: {
              fontSize: 16,
              fill: "rgba(162, 169, 180, 1)"
            },
            offsetY: 8,
            offsetX: 4
          },
          line: {
            style: {
              stroke: "rgba(57, 69, 106, 1)"
            }
          }
        },
        yAxis: {
          label: {
            style: {
              fontSize: 16,
              fill: "rgba(162, 169, 180, 1)"
            },
            offsetX: -4
          },
          unit: {
            position: ["-5%", "-10%"],
            style: {
              fontSize: 16,
              fill: "rgba(162, 169, 180, 1)"
            }
          },
          scale: {
            tickCount: 6,
            tickMethod: Ht,
            min: 0
          },
          grid: {
            line: {
              style: {
                stroke: "rgba(57, 69, 106, 0.4)",
                lineWidth: 1,
                lineDash: [3, 3]
              }
            }
          }
        }
      },
      tooltip: {
        crosshairs: {
          type: "xy",
          line: {
            style: {
              lineWidth: 1.32,
              stroke: "l(90) 0:rgba(54, 110, 174,0.1)  1:rgba(129, 170, 212,0.8)",
              shadowColor: "rgb(238, 244, 255)",
              shadowBlur: 1.6
            }
          }
        },
        domStyles: {
          "g2-tooltip": {
            background: "rgba(159, 177, 245, 0.3)",
            fontSize: "14px",
            fontFamily: "Roboto",
            textAlign: "left",
            borderRadius: "10px",
            boxShadow: "none",
            padding: "15px 20px"
          },
          "g2-tooltip-title": {
            color: "rgba(255, 255, 255, 1)",
            fontSize: "14px"
          },
          "g2-tooltip-list": {
            textAlign: "left"
          },
          "g2-tooltip-marker": {
            display: "none",
            width: "0.2rem",
            height: "0.06rem",
            "border-radius": 0
          },
          "g2-tooltip-name": {
            color: "rgba(255, 255, 255, 0.7)",
            textAlign: "left"
          },
          "g2-tooltip-value": {
            color: "rgba(255, 255, 255, 1)",
            fontSize: "14px",
            marginLeft: "15px"
          },
          "g2-tooltip-unit": {
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "14px",
            marginLeft: "5px"
          }
        }
      },
      annotation: {
        image: [
          {
            src: le,
            start: ["00:00", "min"],
            end: ["00:00", "min"],
            offsetX: -7
          },
          {
            src: le,
            start: ["08:00", "min"],
            end: ["08:00", "min"],
            offsetX: -7
          },
          {
            src: le,
            start: ["16:00", "min"],
            end: ["16:00", "min"],
            offsetX: -7
          }
        ],
        line: [
          {
            style: {
              lineDash: [5, 2, 3, 5],
              lineWidth: 1.8,
              stroke: "rgba(133, 116, 243, 1)",
              fill: "transparent"
            }
          },
          {
            style: {
              lineDash: [5, 2, 3, 5],
              lineWidth: 1.8,
              stroke: "rgba(133, 116, 243, 1)",
              fill: "transparent"
            }
          }
        ],
        regionFilter: []
      }
    },
    mirror: {
      color: ["#1E91F5", "#8574F3"],
      fillColor: ["l(270) 0:#0a2f4f 0.2:#104e83 1:#1E91F5", "l(90) 0:#2e3452 0.2:#4d5789 1:#8574F3"],
      legend: {
        position: "top",
        marker: {
          symbol: "hyphen"
        },
        label: {
          align: "bottom"
        },
        itemName: {
          style: {
            fill: "rgba(255, 255, 255, 0.7)"
          }
        }
      },
      interaction: {
        "legend-filter": !1,
        "legend-active": !1
      },
      transpose: "mirror",
      axis: {
        xAxis: {
          scale: {
            tickCount: 7
          },
          tickLine: null,
          label: {
            style: {
              fontSize: 16,
              fill: "rgba(162, 169, 180, 1)"
            },
            offsetY: 8,
            offsetX: 4
          },
          line: {
            style: {
              stroke: "rgba(57, 69, 106, 1)"
            }
          }
        },
        yAxis: {
          label: {
            autoHide: !1,
            style: {
              fontSize: 16,
              fill: "rgba(162, 169, 180, 1)"
            },
            offsetX: -4
          },
          scale: {
            tickCount: 2,
            tickMethod: Ht
          },
          unit: [
            {
              content: "\u65F6",
              position: ["-5%", "-20%"],
              style: {
                fontSize: 16,
                fill: "rgba(162, 169, 180, 1)"
              }
            },
            {
              content: "\u6B21",
              position: ["-5%", "120%"],
              style: {
                fontSize: 16,
                fill: "rgba(162, 169, 180, 1)"
              }
            }
          ],
          grid: {
            line: {
              style: {
                stroke: "rgba(57, 69, 106, 0.4)",
                lineWidth: 1,
                lineDash: [3, 3]
              }
            }
          }
        }
      },
      tooltip: {
        crosshairs: null,
        domStyles: {
          "g2-tooltip": {
            background: "rgba(159, 177, 245, 0.3)",
            fontSize: "14px",
            fontFamily: "Roboto",
            textAlign: "left",
            borderRadius: "10px",
            boxShadow: "none",
            padding: "15px 20px"
          },
          "g2-tooltip-title": {
            color: "rgba(255, 255, 255, 1)",
            fontSize: "14px"
          },
          "g2-tooltip-list": {
            textAlign: "left"
          },
          "g2-tooltip-marker": {
            display: "none"
          },
          "g2-tooltip-name": {
            color: "rgba(255, 255, 255, 0.7)",
            textAlign: "left"
          },
          "g2-tooltip-value": {
            color: "rgba(255, 255, 255, 1)",
            fontSize: "14px",
            marginLeft: "15px"
          },
          "g2-tooltip-unit": {
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "14px",
            marginLeft: "5px"
          }
        }
      },
      style: {
        barWidth: 16,
        shape: "topTriangle"
      }
    },
    arrowSecond: {
      color: ["l(0) 0:#0a2f4f 0.2:#104e83 0.8:#1D8CEC  1:#1D8CEC"],
      axis: {
        xAxis: {
          line: {
            style: {
              stroke: "rgba(57, 69, 106, 1)"
            }
          },
          label: {
            style: {
              fontSize: 16,
              fill: "rgba(255, 255, 255, 0.7)"
            }
          },
          tickLine: null
        },
        yAxis: !1
      },
      tooltip: !1,
      transpose: "horizontal",
      scrollbar: {
        max: 8,
        cfg: {
          type: "vertical",
          style: {
            thumbColor: "#1D8CEC",
            thumbHighlightColor: "#104e83",
            trackColor: "rgba(255, 255, 255, 0.1)"
          }
        }
      },
      style: {
        barWidth: 16,
        shape: yo
      }
    },
    arrowMain: {
      color: ["l(0) 0:#2e3452 0.2:#4d5789 0.8:#9FB1F5 1:#9FB1F5"],
      axis: {
        xAxis: {
          line: {
            style: {
              stroke: "rgba(57, 69, 106, 1)"
            }
          },
          label: {
            style: {
              fontSize: 16,
              fill: "rgba(255, 255, 255, 0.7)"
            }
          },
          tickLine: null
        },
        yAxis: !1
      },
      tooltip: !1,
      transpose: "horizontal",
      scrollbar: {
        max: 8,
        cfg: {
          type: "vertical",
          style: {
            thumbColor: "#9FB1F5",
            thumbHighlightColor: "#4d5789",
            trackColor: "rgba(255, 255, 255, 0.1)"
          }
        }
      },
      style: {
        barWidth: 16,
        shape: vo
      }
    }
  },
  lightOrange: {
    default: {
      color: ["rgba(255, 176, 101, 1)", "rgba(232, 93, 77, 1)", "rgba(206, 157, 109, 1)", "rgba(210, 182, 155, 1)", "rgba(240, 192, 146, 1)"],
      colorCopy: ["rgba(255, 176, 101, 1)", "rgba(232, 93, 77, 1)", "rgba(206, 157, 109, 1)", "rgba(210, 182, 155, 1)", "rgba(240, 192, 146, 1)"],
      fillColor: ["l(270) 0:rgba(255, 176, 101, 0.1)  1:rgba(255, 176, 101, 1)", "l(270) 0:rgba(232, 93, 77, 0.1) 1:rgba(232, 93, 77, 1)", "l(270) 0:rgba(206, 157, 109, 0.1) 1:rgba(206, 157, 109, 1)", "l(270) 0:rgba(210, 182, 155, 0.1) 1:rgba(210, 182, 155, 1)", "l(270) 0:rgba(240, 192, 146, 0.1) 1:rgba(240, 192, 146, 1)"],
      axis: {
        xAxis: {
          tickLine: null,
          scale: {
            tickCount: 7,
            range: [0.02, 0.96]
          },
          label: {
            style: {
              fontSize: 16,
              fill: "rgba(102, 102, 102, 0.8)"
            },
            offsetY: 8,
            offsetX: 4
          },
          line: {
            style: {
              stroke: "rgba(216, 216, 216, 1)"
            }
          }
        },
        yAxis: {
          label: {
            style: {
              fontSize: 16,
              fill: "rgba(133, 133, 133, 1)"
            },
            offsetX: -4
          },
          scale: {
            tickCount: 6,
            tickMethod: Ht,
            min: 0
          },
          unit: {
            position: ["-5%", "-10%"],
            style: {
              fontSize: 16,
              color: "rgba(102, 102, 102, 0.8)"
            }
          },
          grid: {
            line: {
              style: {
                stroke: "rgba(216, 216, 216, 1)",
                lineWidth: 1,
                lineDash: [3, 3]
              }
            }
          }
        }
      },
      tooltip: {
        crosshairs: {
          type: "x",
          line: {
            style: {
              lineWidth: 1.32,
              stroke: "l(90) 0:rgba(232, 93, 77, 0.1)  1:rgba(232, 93, 77, 0.8)",
              shadowColor: "rgb(238, 244, 255)",
              shadowBlur: 1.6
            }
          }
        },
        domStyles: {
          "g2-tooltip": {
            background: "rgba(232, 93, 77, 0.8)",
            color: "rgb(255, 255, 255)",
            fontSize: "14px",
            fontFamily: "Roboto",
            textAlign: "left",
            borderRadius: "10px",
            boxShadow: "none",
            padding: "15px 20px"
          },
          "g2-tooltip-title": {
            color: "rgba(255, 255, 255, 1)",
            fontSize: "14px"
          },
          "g2-tooltip-list": {
            textAlign: "left"
          },
          "g2-tooltip-marker": {
            display: "none"
          },
          "g2-tooltip-name": {
            color: "rgba(255, 255, 255, 0.7)",
            textAlign: "left"
          },
          "g2-tooltip-value": {
            color: "rgba(255, 255, 255, 1)",
            fontSize: "14px",
            marginLeft: "15px"
          },
          "g2-tooltip-unit": {
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "14px",
            marginLeft: "5px"
          }
        }
      },
      annotation: {
        image: [
          {
            src: ue,
            start: ["00:00", "min"],
            end: ["00:00", "min"],
            offsetX: -7
          },
          {
            src: ue,
            start: ["08:00", "min"],
            end: ["08:00", "min"],
            offsetX: -7
          },
          {
            src: ue,
            start: ["16:00", "min"],
            end: ["16:00", "min"],
            offsetX: -7
          }
        ],
        line: [
          {
            style: {
              lineDash: [5, 2, 3, 5],
              lineWidth: 1.8,
              stroke: "rgba(232, 93, 77, 1)",
              fill: "transparent"
            }
          },
          {
            style: {
              lineDash: [5, 2, 3, 5],
              lineWidth: 1.8,
              stroke: "rgba(232, 93, 77, 1)",
              fill: "transparent"
            }
          }
        ],
        regionFilter: [
          {
            color: "rgba(255, 255, 255, 0.7)",
            top: !0,
            apply: ["area"]
          },
          {
            color: "rgba(255, 255, 255, 0.7)",
            top: !0,
            apply: ["area"]
          }
        ]
      },
      coordinate: {
        interval: 0.02,
        radius: 1,
        innerRadius: 0.85
      },
      view: [
        {
          coordinate: {
            interval: 0.02,
            radius: 0.32,
            innerRadius: 0.8
          }
        }
      ],
      animation: {
        highLight: {
          time: 3,
          color: ["#E84C3A", "#FFA34C", "#CE8F52", "#D2A274", "#F7D2AD"]
        }
      }
    },
    circular: {
      color: ["rgba(232, 93, 77, 1)", "rgba(255, 176, 101, 1)", "rgba(206, 157, 109, 1)", "rgba(210, 182, 155, 1)", "rgba(240, 192, 146, 1)"],
      coordinate: {
        interval: 0.02,
        radius: 1,
        innerRadius: 0.85
      },
      view: [
        {
          coordinate: {
            interval: 0.02,
            radius: 0.32,
            innerRadius: 0.8
          }
        }
      ]
    },
    dataExtract: {
      color: ["rgba(255, 176, 101, 1)", "rgba(232, 93, 77, 1)", "rgba(206, 157, 109, 1)", "rgba(210, 182, 155, 1)", "rgba(240, 192, 146, 1)"],
      axis: {
        xAxis: {
          tickLine: null,
          scale: {
            tickMethod: (e) => {
              const t = [], r = e.values.length / 6;
              for (let n = 0; n < 6; n++)
                t.push(e.values[Math.floor(r * n)]);
              return t.push(e.values[e.values.length - 1]), t;
            },
            range: [0.02, 0.98]
          },
          label: {
            style: {
              fontSize: 16,
              fill: "rgba(102, 102, 102, 0.8)"
            },
            offsetY: 8,
            offsetX: 4
          },
          line: {
            style: {
              stroke: "rgba(216, 216, 216, 1)"
            }
          },
          slider: {
            massData: (e, t) => Pn(e, t, "rgba(232, 57, 41, 1)"),
            backgroundStyle: {
              fill: "rgba(116, 116, 116, 0.1)"
            },
            foregroundStyle: {
              fill: "rgba(226, 53, 33, 0.12)"
            },
            trendCfg: {
              lineStyle: {
                fill: "rgb(211, 181, 153)"
              }
            }
          }
        },
        yAxis: {
          label: {
            style: {
              fontSize: 16,
              fill: "rgba(133, 133, 133, 1)"
            },
            offsetX: -4
          },
          scale: {
            tickCount: 6,
            tickMethod: Ht,
            min: 0
          },
          unit: {
            position: ["-5%", "-10%"],
            style: {
              fontSize: 16,
              color: "rgba(102, 102, 102, 0.8) "
            }
          },
          grid: {
            line: {
              style: {
                stroke: "rgba(216, 216, 216, 1)",
                lineWidth: 1,
                lineDash: [3, 3]
              }
            }
          }
        }
      },
      tooltip: {
        crosshairs: {
          type: "xy",
          line: {
            style: {
              lineWidth: 1.32,
              stroke: "l(90) 0:rgba(232, 93, 77, 0.1)  1:rgba(232, 93, 77, 0.8)",
              shadowColor: "rgb(238, 244, 255)",
              shadowBlur: 1.6
            }
          }
        },
        domStyles: {
          "g2-tooltip": {
            background: "rgba(232, 93, 77, 0.8)",
            color: "rgb(255, 255, 255)",
            fontSize: "14px",
            fontFamily: "Roboto",
            textAlign: "left",
            borderRadius: "10px",
            boxShadow: "none",
            padding: "15px 20px"
          },
          "g2-tooltip-title": {
            color: "rgba(255, 255, 255, 1)",
            fontSize: "14px"
          },
          "g2-tooltip-list": {
            textAlign: "left"
          },
          "g2-tooltip-marker": {
            display: "none"
          },
          "g2-tooltip-name": {
            color: "rgba(255, 255, 255, 0.7)",
            textAlign: "left"
          },
          "g2-tooltip-value": {
            color: "rgba(255, 255, 255, 1)",
            fontSize: "14px",
            marginLeft: "15px"
          },
          "g2-tooltip-unit": {
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "14px",
            marginLeft: "5px"
          }
        }
      },
      annotation: {
        image: [
          {
            src: ue,
            start: ["00:00", "min"],
            end: ["00:00", "min"],
            offsetX: -7
          },
          {
            src: ue,
            start: ["08:00", "min"],
            end: ["08:00", "min"],
            offsetX: -7
          },
          {
            src: ue,
            start: ["16:00", "min"],
            end: ["16:00", "min"],
            offsetX: -7
          }
        ],
        regionFilter: []
      }
    },
    mirror: {
      color: ["rgba(255, 176, 101, 1)", "rgba(232, 93, 77, 1)"],
      fillColor: ["l(90) 0:rgba(255, 176, 101, 0.5)  1:rgba(255, 176, 101, 1)", "l(270) 0:rgba(232, 93, 77, 0.5) 1:rgba(232, 93, 77, 1)"],
      legend: {
        position: "top",
        marker: {
          symbol: "hyphen"
        },
        label: {
          align: "bottom"
        },
        itemName: {
          style: {
            fill: "rgba(102, 102, 102, 0.8)"
          }
        }
      },
      interaction: {
        "legend-filter": !1,
        "legend-active": !1
      },
      transpose: "mirror",
      axis: {
        xAxis: {
          scale: {
            tickCount: 7
          },
          range: [0.02, 0.98],
          tickLine: null,
          label: {
            style: {
              fontSize: 16,
              fill: "rgba(102, 102, 102, 0.8)"
            },
            offsetY: 8,
            offsetX: 4
          },
          line: {
            style: {
              stroke: "rgba(216, 216, 216, 1)"
            }
          }
        },
        yAxis: {
          label: {
            autoHide: !1,
            style: {
              fontSize: 16,
              fill: "rgba(102, 102, 102, 0.8)"
            },
            offsetX: -4
          },
          scale: {
            tickCount: 2,
            tickMethod: Ht
          },
          unit: [
            {
              content: "\u65F6",
              position: ["-5%", "-20%"],
              style: {
                fontSize: 16,
                fill: "rgba(102, 102, 102, 0.8)"
              }
            },
            {
              content: "\u6B21",
              position: ["-5%", "120%"],
              style: {
                fontSize: 16,
                fill: "rgba(102, 102, 102, 0.8)"
              }
            }
          ],
          grid: {
            line: {
              style: {
                stroke: "rgba(216, 216, 216, 1)",
                lineWidth: 1,
                lineDash: [3, 3]
              }
            }
          }
        }
      },
      tooltip: {
        crosshairs: !1,
        domStyles: {
          "g2-tooltip": {
            background: "rgba(232, 93, 77, 0.8)",
            color: "rgb(255, 255, 255)",
            fontSize: "14px",
            fontFamily: "Roboto",
            textAlign: "left",
            borderRadius: "10px",
            boxShadow: "none",
            padding: "15px 20px"
          },
          "g2-tooltip-title": {
            color: "rgba(255, 255, 255, 1)",
            fontSize: "14px"
          },
          "g2-tooltip-list": {
            textAlign: "left"
          },
          "g2-tooltip-marker": {
            display: "none"
          },
          "g2-tooltip-name": {
            color: "rgba(255, 255, 255, 0.7)",
            textAlign: "left"
          },
          "g2-tooltip-value": {
            color: "rgba(255, 255, 255, 1)",
            fontSize: "14px",
            marginLeft: "15px"
          },
          "g2-tooltip-unit": {
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "14px",
            marginLeft: "5px"
          }
        }
      },
      style: {
        barWidth: 16,
        shape: "topTriangle"
      }
    },
    arrowSecond: {
      color: ["l(0) 0:rgba(255, 202, 159, 1) 0.8:rgba(228, 81, 34, 1)  1:rgba(228, 81, 34, 1)"],
      axis: {
        xAxis: {
          line: {
            style: {
              stroke: "rgba(216, 216, 216, 1)"
            }
          },
          label: {
            style: {
              fontSize: 16,
              fill: "rgba(102, 102, 102, 0.8)"
            }
          },
          tickLine: null
        },
        yAxis: !1
      },
      tooltip: !1,
      transpose: "horizontal",
      scrollbar: {
        max: 8,
        cfg: {
          type: "vertical",
          style: {
            thumbColor: "rgba(228, 81, 34, 1)",
            thumbHighlightColor: "rgba(255, 202, 159, 1)",
            trackColor: "rgba(0, 0, 0, 0.1)"
          }
        }
      },
      style: {
        barWidth: 16,
        shape: bo
      }
    },
    arrowMain: {
      color: ["l(0) 0:rgba(255, 176, 101, 0.5) 0.8:rgba(255, 176, 101, 1) 1:rgba(255, 176, 101, 1)"],
      axis: {
        xAxis: {
          line: {
            style: {
              stroke: "rgba(216, 216, 216, 1) "
            }
          },
          label: {
            style: {
              fontSize: 16,
              fill: "rgba(102, 102, 102, 0.8)"
            }
          },
          tickLine: null
        },
        yAxis: !1
      },
      tooltip: !1,
      transpose: "horizontal",
      scrollbar: {
        max: 8,
        cfg: {
          type: "vertical",
          style: {
            thumbColor: "rgba(255, 176, 101, 1)",
            thumbHighlightColor: "rgba(255, 176, 101, 0.5)",
            trackColor: "rgba(0, 0, 0, 0.1)"
          }
        }
      },
      style: {
        barWidth: 16,
        shape: wo
      }
    }
  },
  aiBlue: {
    default: {
      color: ["rgba(30, 145, 245, 1)", "rgba(215, 239, 252, 1)", "rgba(133, 116, 243, 1)", "rgba(94, 133, 178, 1)"],
      colorCopy: ["rgba(30, 145, 245, 1)", "rgba(215, 239, 252, 1)", "rgba(133, 116, 243, 1)", "rgba(94, 133, 178, 1)"],
      fillColor: ["l(270) 0:rgba(0,145,245,0)   1:rgba(30,145,245,1)", "l(270) 0:rgba(133,116,243,0)  1:rgba(215, 239, 252, 1)", "l(270) 0:rgba(141,179,223,0)  1:rgba(133, 116, 243, 1)", "l(270) 0:rgba(42,147,199,0)  1:rgba(94, 133, 178, 1)"],
      line: {
        smooth: !0
      },
      axis: {
        xAxis: {
          tickLine: null,
          scale: {
            tickCount: 7,
            range: [0.02, 0.96]
          },
          label: {
            style: {
              fontSize: 12,
              fill: "rgba(147, 193, 230, 1)"
            },
            offsetY: 8,
            offsetX: 4
          },
          line: null
        },
        yAxis: {
          label: {
            style: {
              fontSize: 12,
              fill: "rgba(147, 193, 230, 1)"
            },
            offsetX: -4
          },
          unit: {
            position: ["-5.9%", "-14%"],
            style: {
              fontSize: 12,
              fill: "rgba(147, 193, 230, 1)"
            }
          },
          scale: {
            tickCount: 5,
            tickMethod: Ht,
            min: 0
          },
          grid: {
            line: {
              style: {
                stroke: "#28394A",
                lineWidth: 0.5,
                lineDash: [4, 4]
              }
            }
          }
        }
      },
      tooltip: {
        crosshairs: {
          type: "x",
          line: {
            style: {
              lineWidth: 1.32,
              stroke: "l(90) 0:rgba(54, 110, 174,0.1)  1:rgba(129, 170, 212,0.8)",
              shadowColor: "rgb(238, 244, 255)",
              shadowBlur: 3
            }
          }
        },
        domStyles: {
          "g2-tooltip": {
            background: "rgba(25, 35, 59, 0.5)",
            border: "2px solid  rgba(25, 35, 59, 0.5)",
            fontSize: "14px",
            fontFamily: "Roboto",
            textAlign: "left",
            borderRadius: "10px",
            boxShadow: "none",
            padding: "10px 15px"
          },
          "g2-tooltip-title": {
            color: " rgba(202, 227, 255, 1)",
            fontSize: "14px"
          },
          "g2-tooltip-list": {
            textAlign: "left"
          },
          "g2-tooltip-marker": {
            display: "inline-block",
            width: "0.08rem",
            height: "0.08rem",
            position: "relative",
            bottom: "1px"
          },
          "g2-tooltip-name": {
            color: "rgba(202, 227, 255, 1)",
            textAlign: "left"
          },
          "g2-tooltip-value": {
            color: "rgba(202, 227, 255, 1)",
            fontSize: "14px",
            marginLeft: "15px"
          },
          "g2-tooltip-unit": {
            color: "rgba(202, 227, 255, 1)",
            fontSize: "14px",
            marginLeft: "5px"
          }
        },
        marker: {
          fill: "rgba(255, 255, 255, 1)",
          stroke: "rgba(30, 145, 245, 0.3)",
          lineWidth: 5
        }
      },
      legend: {
        position: "top-right",
        marker: (e, t, r) => ({
          symbol: (n, i) => [
            ["M", n, i],
            ["L", n + 10, i],
            ["L", n + 10, i - 6],
            ["L", n, i - 6],
            ["L", n, i]
          ],
          style: {
            fill: r.style.stroke,
            lineWidth: 2
          }
        }),
        itemName: {
          style: {
            fill: "rgba(147, 193, 230, 1)"
          }
        },
        offsetX: -20
      },
      style: {
        fillOpacity: 0.1
      }
    }
  }
};
function We(e, t) {
  let r = null, n = null;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    r = t.slice(), n = e;
    for (let i = 0; i < n.length; i++) {
      const a = n[i];
      (Object.prototype.toString.call(a) === "[object Object]" || Object.prototype.toString.call(r[i]) === "[object Array]") && (r[i] = We(a, r[i]));
    }
  } else {
    r = { ...t }, n = Object.entries(e);
    for (const [i, a] of n) {
      if (r[i] === void 0) {
        r[i] = a;
        continue;
      }
      r[i] === !1 || r[i] === null || Object.keys(r[i]).length === 0 || (Object.prototype.toString.call(a) === "[object Object]" || Object.prototype.toString.call(r[i]) === "[object Array]") && (r[i] = We(a, r[i]));
    }
  }
  return r;
}
function an(e) {
  for (const [t, r] of Object.entries(e))
    r === !1 && e[t];
  return e;
}
function te(e) {
  if (typeof e.theme != "string" || !e.theme)
    return e;
  const t = ".";
  let r = ma;
  const n = e.theme.split(t);
  for (const i of n) {
    if (Object.prototype.toString.call(r[i]) !== "[object Object]")
      return console.error("\u8BFB\u53D6\u4E3B\u9898\u914D\u7F6E\u51FA\u9519"), e;
    r = r[i];
  }
  return We(r, e);
}
var bl = typeof global == "object" && global && global.Object === Object && global;
const ga = bl;
var wl = typeof self == "object" && self && self.Object === Object && self, xl = ga || wl || Function("return this")();
const Lt = xl;
var Sl = Lt.Symbol;
const me = Sl;
var pa = Object.prototype, Al = pa.hasOwnProperty, Tl = pa.toString, Fe = me ? me.toStringTag : void 0;
function Ol(e) {
  var t = Al.call(e, Fe), r = e[Fe];
  try {
    e[Fe] = void 0;
    var n = !0;
  } catch {
  }
  var i = Tl.call(e);
  return n && (t ? e[Fe] = r : delete e[Fe]), i;
}
var Ml = Object.prototype, Il = Ml.toString;
function kl(e) {
  return Il.call(e);
}
var Nl = "[object Null]", Cl = "[object Undefined]", Bn = me ? me.toStringTag : void 0;
function ie(e) {
  return e == null ? e === void 0 ? Cl : Nl : Bn && Bn in Object(e) ? Ol(e) : kl(e);
}
function ae(e) {
  return e != null && typeof e == "object";
}
var Fl = Array.isArray;
const ht = Fl;
function Je(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var El = "[object AsyncFunction]", Dl = "[object Function]", jl = "[object GeneratorFunction]", Ll = "[object Proxy]";
function ya(e) {
  if (!Je(e))
    return !1;
  var t = ie(e);
  return t == Dl || t == jl || t == El || t == Ll;
}
var Rl = Lt["__core-js_shared__"];
const Lr = Rl;
var Vn = function() {
  var e = /[^.]+$/.exec(Lr && Lr.keys && Lr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function zl(e) {
  return !!Vn && Vn in e;
}
var Zl = Function.prototype, Wl = Zl.toString;
function oe(e) {
  if (e != null) {
    try {
      return Wl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Pl = /[\\^$.*+?()[\]{}|]/g, Bl = /^\[object .+?Constructor\]$/, Vl = Function.prototype, Gl = Object.prototype, Yl = Vl.toString, Ul = Gl.hasOwnProperty, Hl = RegExp(
  "^" + Yl.call(Ul).replace(Pl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Jl(e) {
  if (!Je(e) || zl(e))
    return !1;
  var t = ya(e) ? Hl : Bl;
  return t.test(oe(e));
}
function Xl(e, t) {
  return e == null ? void 0 : e[t];
}
function se(e, t) {
  var r = Xl(e, t);
  return Jl(r) ? r : void 0;
}
var _l = se(Lt, "WeakMap");
const Ur = _l;
var Gn = Object.create, ql = function() {
  function e() {
  }
  return function(t) {
    if (!Je(t))
      return {};
    if (Gn)
      return Gn(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
const Ql = ql;
function Kl(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var $l = function() {
  try {
    var e = se(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Yn = $l;
function tu(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var eu = 9007199254740991, ru = /^(?:0|[1-9]\d*)$/;
function nu(e, t) {
  var r = typeof e;
  return t = t == null ? eu : t, !!t && (r == "number" || r != "symbol" && ru.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function va(e, t, r) {
  t == "__proto__" && Yn ? Yn(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function ba(e, t) {
  return e === t || e !== e && t !== t;
}
var iu = Object.prototype, au = iu.hasOwnProperty;
function wa(e, t, r) {
  var n = e[t];
  (!(au.call(e, t) && ba(n, r)) || r === void 0 && !(t in e)) && va(e, t, r);
}
function xr(e, t, r, n) {
  var i = !r;
  r || (r = {});
  for (var a = -1, o = t.length; ++a < o; ) {
    var s = t[a], l = n ? n(r[s], e[s], s, r, e) : void 0;
    l === void 0 && (l = e[s]), i ? va(r, s, l) : wa(r, s, l);
  }
  return r;
}
var ou = 9007199254740991;
function xa(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ou;
}
function Sa(e) {
  return e != null && xa(e.length) && !ya(e);
}
var su = Object.prototype;
function on(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || su;
  return e === r;
}
function lu(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var uu = "[object Arguments]";
function Un(e) {
  return ae(e) && ie(e) == uu;
}
var Aa = Object.prototype, cu = Aa.hasOwnProperty, fu = Aa.propertyIsEnumerable, hu = Un(function() {
  return arguments;
}()) ? Un : function(e) {
  return ae(e) && cu.call(e, "callee") && !fu.call(e, "callee");
};
const du = hu;
function mu() {
  return !1;
}
var Ta = typeof exports == "object" && exports && !exports.nodeType && exports, Hn = Ta && typeof module == "object" && module && !module.nodeType && module, gu = Hn && Hn.exports === Ta, Jn = gu ? Lt.Buffer : void 0, pu = Jn ? Jn.isBuffer : void 0, yu = pu || mu;
const Oa = yu;
var vu = "[object Arguments]", bu = "[object Array]", wu = "[object Boolean]", xu = "[object Date]", Su = "[object Error]", Au = "[object Function]", Tu = "[object Map]", Ou = "[object Number]", Mu = "[object Object]", Iu = "[object RegExp]", ku = "[object Set]", Nu = "[object String]", Cu = "[object WeakMap]", Fu = "[object ArrayBuffer]", Eu = "[object DataView]", Du = "[object Float32Array]", ju = "[object Float64Array]", Lu = "[object Int8Array]", Ru = "[object Int16Array]", zu = "[object Int32Array]", Zu = "[object Uint8Array]", Wu = "[object Uint8ClampedArray]", Pu = "[object Uint16Array]", Bu = "[object Uint32Array]", Z = {};
Z[Du] = Z[ju] = Z[Lu] = Z[Ru] = Z[zu] = Z[Zu] = Z[Wu] = Z[Pu] = Z[Bu] = !0;
Z[vu] = Z[bu] = Z[Fu] = Z[wu] = Z[Eu] = Z[xu] = Z[Su] = Z[Au] = Z[Tu] = Z[Ou] = Z[Mu] = Z[Iu] = Z[ku] = Z[Nu] = Z[Cu] = !1;
function Vu(e) {
  return ae(e) && xa(e.length) && !!Z[ie(e)];
}
function sn(e) {
  return function(t) {
    return e(t);
  };
}
var Ma = typeof exports == "object" && exports && !exports.nodeType && exports, Ze = Ma && typeof module == "object" && module && !module.nodeType && module, Gu = Ze && Ze.exports === Ma, Rr = Gu && ga.process, Yu = function() {
  try {
    var e = Ze && Ze.require && Ze.require("util").types;
    return e || Rr && Rr.binding && Rr.binding("util");
  } catch {
  }
}();
const ge = Yu;
var Xn = ge && ge.isTypedArray, Uu = Xn ? sn(Xn) : Vu;
const Hu = Uu;
var Ju = Object.prototype, Xu = Ju.hasOwnProperty;
function Ia(e, t) {
  var r = ht(e), n = !r && du(e), i = !r && !n && Oa(e), a = !r && !n && !i && Hu(e), o = r || n || i || a, s = o ? lu(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || Xu.call(e, u)) && !(o && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || nu(u, l))) && s.push(u);
  return s;
}
function ka(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var _u = ka(Object.keys, Object);
const qu = _u;
var Qu = Object.prototype, Ku = Qu.hasOwnProperty;
function $u(e) {
  if (!on(e))
    return qu(e);
  var t = [];
  for (var r in Object(e))
    Ku.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ln(e) {
  return Sa(e) ? Ia(e) : $u(e);
}
function tc(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var ec = Object.prototype, rc = ec.hasOwnProperty;
function nc(e) {
  if (!Je(e))
    return tc(e);
  var t = on(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !rc.call(e, n)) || r.push(n);
  return r;
}
function un(e) {
  return Sa(e) ? Ia(e, !0) : nc(e);
}
var ic = se(Object, "create");
const Pe = ic;
function ac() {
  this.__data__ = Pe ? Pe(null) : {}, this.size = 0;
}
function oc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var sc = "__lodash_hash_undefined__", lc = Object.prototype, uc = lc.hasOwnProperty;
function cc(e) {
  var t = this.__data__;
  if (Pe) {
    var r = t[e];
    return r === sc ? void 0 : r;
  }
  return uc.call(t, e) ? t[e] : void 0;
}
var fc = Object.prototype, hc = fc.hasOwnProperty;
function dc(e) {
  var t = this.__data__;
  return Pe ? t[e] !== void 0 : hc.call(t, e);
}
var mc = "__lodash_hash_undefined__";
function gc(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Pe && t === void 0 ? mc : t, this;
}
function ee(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ee.prototype.clear = ac;
ee.prototype.delete = oc;
ee.prototype.get = cc;
ee.prototype.has = dc;
ee.prototype.set = gc;
function pc() {
  this.__data__ = [], this.size = 0;
}
function Sr(e, t) {
  for (var r = e.length; r--; )
    if (ba(e[r][0], t))
      return r;
  return -1;
}
var yc = Array.prototype, vc = yc.splice;
function bc(e) {
  var t = this.__data__, r = Sr(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : vc.call(t, r, 1), --this.size, !0;
}
function wc(e) {
  var t = this.__data__, r = Sr(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function xc(e) {
  return Sr(this.__data__, e) > -1;
}
function Sc(e, t) {
  var r = this.__data__, n = Sr(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Wt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Wt.prototype.clear = pc;
Wt.prototype.delete = bc;
Wt.prototype.get = wc;
Wt.prototype.has = xc;
Wt.prototype.set = Sc;
var Ac = se(Lt, "Map");
const Be = Ac;
function Tc() {
  this.size = 0, this.__data__ = {
    hash: new ee(),
    map: new (Be || Wt)(),
    string: new ee()
  };
}
function Oc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ar(e, t) {
  var r = e.__data__;
  return Oc(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Mc(e) {
  var t = Ar(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ic(e) {
  return Ar(this, e).get(e);
}
function kc(e) {
  return Ar(this, e).has(e);
}
function Nc(e, t) {
  var r = Ar(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Ae(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ae.prototype.clear = Tc;
Ae.prototype.delete = Mc;
Ae.prototype.get = Ic;
Ae.prototype.has = kc;
Ae.prototype.set = Nc;
function Na(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var Cc = ka(Object.getPrototypeOf, Object);
const Ca = Cc;
function Fc() {
  this.__data__ = new Wt(), this.size = 0;
}
function Ec(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Dc(e) {
  return this.__data__.get(e);
}
function jc(e) {
  return this.__data__.has(e);
}
var Lc = 200;
function Rc(e, t) {
  var r = this.__data__;
  if (r instanceof Wt) {
    var n = r.__data__;
    if (!Be || n.length < Lc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Ae(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function Te(e) {
  var t = this.__data__ = new Wt(e);
  this.size = t.size;
}
Te.prototype.clear = Fc;
Te.prototype.delete = Ec;
Te.prototype.get = Dc;
Te.prototype.has = jc;
Te.prototype.set = Rc;
function zc(e, t) {
  return e && xr(t, ln(t), e);
}
function Zc(e, t) {
  return e && xr(t, un(t), e);
}
var Fa = typeof exports == "object" && exports && !exports.nodeType && exports, _n = Fa && typeof module == "object" && module && !module.nodeType && module, Wc = _n && _n.exports === Fa, qn = Wc ? Lt.Buffer : void 0, Qn = qn ? qn.allocUnsafe : void 0;
function Pc(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = Qn ? Qn(r) : new e.constructor(r);
  return e.copy(n), n;
}
function Bc(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
function Ea() {
  return [];
}
var Vc = Object.prototype, Gc = Vc.propertyIsEnumerable, Kn = Object.getOwnPropertySymbols, Yc = Kn ? function(e) {
  return e == null ? [] : (e = Object(e), Bc(Kn(e), function(t) {
    return Gc.call(e, t);
  }));
} : Ea;
const cn = Yc;
function Uc(e, t) {
  return xr(e, cn(e), t);
}
var Hc = Object.getOwnPropertySymbols, Jc = Hc ? function(e) {
  for (var t = []; e; )
    Na(t, cn(e)), e = Ca(e);
  return t;
} : Ea;
const Da = Jc;
function Xc(e, t) {
  return xr(e, Da(e), t);
}
function ja(e, t, r) {
  var n = t(e);
  return ht(e) ? n : Na(n, r(e));
}
function _c(e) {
  return ja(e, ln, cn);
}
function qc(e) {
  return ja(e, un, Da);
}
var Qc = se(Lt, "DataView");
const Hr = Qc;
var Kc = se(Lt, "Promise");
const Jr = Kc;
var $c = se(Lt, "Set");
const Xr = $c;
var $n = "[object Map]", tf = "[object Object]", ti = "[object Promise]", ei = "[object Set]", ri = "[object WeakMap]", ni = "[object DataView]", ef = oe(Hr), rf = oe(Be), nf = oe(Jr), af = oe(Xr), of = oe(Ur), qt = ie;
(Hr && qt(new Hr(new ArrayBuffer(1))) != ni || Be && qt(new Be()) != $n || Jr && qt(Jr.resolve()) != ti || Xr && qt(new Xr()) != ei || Ur && qt(new Ur()) != ri) && (qt = function(e) {
  var t = ie(e), r = t == tf ? e.constructor : void 0, n = r ? oe(r) : "";
  if (n)
    switch (n) {
      case ef:
        return ni;
      case rf:
        return $n;
      case nf:
        return ti;
      case af:
        return ei;
      case of:
        return ri;
    }
  return t;
});
const fn = qt;
var sf = Object.prototype, lf = sf.hasOwnProperty;
function uf(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && lf.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var cf = Lt.Uint8Array;
const ii = cf;
function hn(e) {
  var t = new e.constructor(e.byteLength);
  return new ii(t).set(new ii(e)), t;
}
function ff(e, t) {
  var r = t ? hn(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var hf = /\w*$/;
function df(e) {
  var t = new e.constructor(e.source, hf.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var ai = me ? me.prototype : void 0, oi = ai ? ai.valueOf : void 0;
function mf(e) {
  return oi ? Object(oi.call(e)) : {};
}
function gf(e, t) {
  var r = t ? hn(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var pf = "[object Boolean]", yf = "[object Date]", vf = "[object Map]", bf = "[object Number]", wf = "[object RegExp]", xf = "[object Set]", Sf = "[object String]", Af = "[object Symbol]", Tf = "[object ArrayBuffer]", Of = "[object DataView]", Mf = "[object Float32Array]", If = "[object Float64Array]", kf = "[object Int8Array]", Nf = "[object Int16Array]", Cf = "[object Int32Array]", Ff = "[object Uint8Array]", Ef = "[object Uint8ClampedArray]", Df = "[object Uint16Array]", jf = "[object Uint32Array]";
function Lf(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case Tf:
      return hn(e);
    case pf:
    case yf:
      return new n(+e);
    case Of:
      return ff(e, r);
    case Mf:
    case If:
    case kf:
    case Nf:
    case Cf:
    case Ff:
    case Ef:
    case Df:
    case jf:
      return gf(e, r);
    case vf:
      return new n();
    case bf:
    case Sf:
      return new n(e);
    case wf:
      return df(e);
    case xf:
      return new n();
    case Af:
      return mf(e);
  }
}
function Rf(e) {
  return typeof e.constructor == "function" && !on(e) ? Ql(Ca(e)) : {};
}
var zf = "[object Map]";
function Zf(e) {
  return ae(e) && fn(e) == zf;
}
var si = ge && ge.isMap, Wf = si ? sn(si) : Zf;
const Pf = Wf;
var Bf = "[object Set]";
function Vf(e) {
  return ae(e) && fn(e) == Bf;
}
var li = ge && ge.isSet, Gf = li ? sn(li) : Vf;
const Yf = Gf;
var Uf = 1, Hf = 2, Jf = 4, La = "[object Arguments]", Xf = "[object Array]", _f = "[object Boolean]", qf = "[object Date]", Qf = "[object Error]", Ra = "[object Function]", Kf = "[object GeneratorFunction]", $f = "[object Map]", th = "[object Number]", za = "[object Object]", eh = "[object RegExp]", rh = "[object Set]", nh = "[object String]", ih = "[object Symbol]", ah = "[object WeakMap]", oh = "[object ArrayBuffer]", sh = "[object DataView]", lh = "[object Float32Array]", uh = "[object Float64Array]", ch = "[object Int8Array]", fh = "[object Int16Array]", hh = "[object Int32Array]", dh = "[object Uint8Array]", mh = "[object Uint8ClampedArray]", gh = "[object Uint16Array]", ph = "[object Uint32Array]", z = {};
z[La] = z[Xf] = z[oh] = z[sh] = z[_f] = z[qf] = z[lh] = z[uh] = z[ch] = z[fh] = z[hh] = z[$f] = z[th] = z[za] = z[eh] = z[rh] = z[nh] = z[ih] = z[dh] = z[mh] = z[gh] = z[ph] = !0;
z[Qf] = z[Ra] = z[ah] = !1;
function lr(e, t, r, n, i, a) {
  var o, s = t & Uf, l = t & Hf, u = t & Jf;
  if (r && (o = i ? r(e, n, i, a) : r(e)), o !== void 0)
    return o;
  if (!Je(e))
    return e;
  var f = ht(e);
  if (f) {
    if (o = uf(e), !s)
      return Kl(e, o);
  } else {
    var y = fn(e), d = y == Ra || y == Kf;
    if (Oa(e))
      return Pc(e, s);
    if (y == za || y == La || d && !i) {
      if (o = l || d ? {} : Rf(e), !s)
        return l ? Xc(e, Zc(o, e)) : Uc(e, zc(o, e));
    } else {
      if (!z[y])
        return i ? e : {};
      o = Lf(e, y, s);
    }
  }
  a || (a = new Te());
  var m = a.get(e);
  if (m)
    return m;
  a.set(e, o), Yf(e) ? e.forEach(function(k) {
    o.add(lr(k, t, r, k, e, a));
  }) : Pf(e) && e.forEach(function(k, S) {
    o.set(S, lr(k, t, r, S, e, a));
  });
  var v = u ? l ? qc : _c : l ? un : ln, M = f ? void 0 : v(e);
  return tu(M || e, function(k, S) {
    M && (S = k, k = e[S]), wa(o, S, lr(k, t, r, S, e, a));
  }), o;
}
var yh = 1, vh = 4;
function bh(e) {
  return lr(e, yh | vh);
}
var wh = "[object Boolean]";
function hr(e) {
  return e === !0 || e === !1 || ae(e) && ie(e) == wh;
}
var xh = "[object Number]";
function ui(e) {
  return typeof e == "number" || ae(e) && ie(e) == xh;
}
const Sh = /* @__PURE__ */ kt({
  __name: "Area",
  props: {
    adjust: null,
    theme: null,
    data: null,
    xField: null,
    yField: null,
    line: null,
    chartBasic: null,
    seriesField: null,
    tooltip: null,
    axis: null,
    legend: null,
    color: null,
    fillColor: null,
    annotation: null,
    scrollBar: null,
    style: null
  },
  setup(e) {
    const t = e, r = L();
    let n, i = t;
    function a(S, A, C = 31) {
      let V = !0;
      if (A) {
        const Y = {};
        S.forEach((_) => {
          const tt = _[A];
          Object.prototype.hasOwnProperty.call(Y, tt) || (Y[tt] = []), Y[tt].push(_);
        }), V = Object.values(Y).some((_) => _.length > C);
      } else
        V = S.length > C;
      return V;
    }
    function o(S, A) {
      if (!!A)
        if (ht(A))
          for (const C of A)
            n.annotation()[S](C);
        else
          n.annotation()[S](A);
    }
    function s() {
      var A, C, V, Y, _;
      const S = L(!1);
      !((A = i.chartBasic) != null && A.width) && !((C = i.chartBasic) != null && C.height) && (S.value = !0), n = new ve({
        container: r.value,
        autoFit: S.value,
        padding: (V = i.chartBasic) == null ? void 0 : V.padding,
        width: (Y = i.chartBasic) == null ? void 0 : Y.width,
        height: (_ = i.chartBasic) == null ? void 0 : _.height
      });
    }
    const l = i.xField ? i.xField : "x", u = i.yField ? i.yField : "y";
    function f(S) {
      S.stopPropagation();
    }
    function y(S) {
      n == null || n.data(S);
    }
    function d(S, A) {
      n.scale(S, A != null ? A : {});
    }
    function m(S, A) {
      A !== !1 ? (d(S, A.scale), n.axis(S, an(A)), o("text", A.unit)) : n.axis(S, !1);
    }
    function v(S) {
      if (!n)
        return;
      if (S === !1) {
        n.axis(!1);
        return;
      }
      const A = (S == null ? void 0 : S.xAxis) === void 0 ? {} : S.xAxis, C = (S == null ? void 0 : S.yAxis) === void 0 ? {} : S.yAxis;
      m(l, A), m(u, C);
    }
    function M() {
      var Y, _, tt, et, ut, xt, St, At, ct, T, P, q, c, h, g;
      if (!n)
        return;
      const S = L("");
      ((Y = i.line) == null ? void 0 : Y.smooth) === !0 && (S.value = "smooth"), n.animate(!1), y(i.data);
      const A = n.line().shape(S.value);
      A.position(l + "*" + u);
      const C = n.area().shape(S.value).tooltip(!1);
      if (C.position(l + "*" + u), i.seriesField)
        i.color instanceof Array ? (A.color(i.seriesField, i.color), C.color(i.seriesField, i.fillColor), C.style({ fillOpacity: (ct = (At = i.style) == null ? void 0 : At.fillOpacity) != null ? ct : 0.7 })) : i.color instanceof Object ? (A.color(i.seriesField, (p) => {
          const b = i.color[p];
          return i.colorCopy[b - 1];
        }), C.color(i.seriesField, (p) => {
          const b = i.color[p];
          return i.fillColor[b - 1];
        }), C.style({ fillOpacity: (P = (T = i.style) == null ? void 0 : T.fillOpacity) != null ? P : 0.7 })) : (A.color(i.seriesField), C.color(i.seriesField));
      else {
        let p = (_ = i.color) != null ? _ : "";
        ht(i.color) && (p = (tt = i.color[0]) != null ? tt : "");
        let b = (et = i.fillColor) != null ? et : "";
        ht(i.fillColor) && (b = (ut = i.fillColor[0]) != null ? ut : ""), A.color(p), C.color(b), C.style({ fillOpacity: (St = (xt = i.style) == null ? void 0 : xt.fillOpacity) != null ? St : 0.7 });
      }
      i.adjust && (C.adjust(i.adjust), A.adjust(i.adjust)), i.annotation !== void 0 && Object.entries(i.annotation).forEach(([p, b]) => {
        o(p, b);
      });
      const V = (c = (q = i == null ? void 0 : i.scrollBar) == null ? void 0 : q.max) != null ? c : 31;
      if (a(i.data, i.seriesField, V) ? (n.option("scrollbar", {
        type: "horizontal",
        style: {
          thumbColor: "rgba(153,153,153,0)",
          thumbHighlightColor: "rgba(153,153,153,0)",
          height: 0
        }
      }), n.interaction("plot-mousewheel-scroll", {
        start: [{ trigger: "plot:mousewheel", action: "mousewheel-scroll:scroll" }]
      })) : n.removeInteraction("plot-mousewheel-scroll"), n.scale(l, {
        range: [0.03, 0.98]
      }), v(i.axis), n.legend(i.legend ? i.legend : !1), i.tooltip === !1 ? n.tooltip(!1) : i.tooltip ? n.tooltip({
        showTitle: i.tooltip.title !== !1,
        showCrosshairs: i.tooltip.crosshairs,
        shared: i.tooltip.shared ? i.tooltip.shared : !0,
        showMarkers: !0,
        follow: i.tooltip.follow,
        title: i.tooltip.title,
        marker: i.tooltip.marker,
        crosshairs: i.tooltip.crosshairs,
        itemTpl: i.tooltip.itemTpl,
        domStyles: i.tooltip.domStyles,
        customItems: i.tooltip.customItems
      }) : i.tooltip || n.tooltip({
        showCrosshairs: !0
      }), n.render(), a(i.data, i.seriesField, V)) {
        const p = n.getController("scrollbar"), b = n.coordinateBBox.width;
        let w = 31;
        b < 374 && (w = 31.5), [498, 502, 1570].indexOf(b) !== -1 && (w = 31.5);
        const I = (g = (h = i.scrollBar) == null ? void 0 : h.categorySize) != null ? g : b / w;
        p.option.categorySize = I, n.render();
      }
    }
    function k(S) {
      n == null || n.clear(), i = te(S), M();
    }
    return re(() => {
      s(), i = te(t), M();
    }), wt(
      t,
      (S) => {
        !n || k(S);
      },
      { deep: !0 }
    ), (S, A) => (ot(), st("div", {
      id: "areaContainer",
      ref_key: "areaContainer",
      ref: r,
      style: { width: "100%", height: "100%" },
      onMousewheel: A[0] || (A[0] = mi((C) => f(C), ["prevent"]))
    }, null, 544));
  }
});
const Xe = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, Ah = /* @__PURE__ */ Xe(Sh, [["__scopeId", "data-v-1c926146"]]), Th = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ah
}, Symbol.toStringTag, { value: "Module" }));
function Oh(e, t, r) {
  return Qt("interval", e, {
    draw(n, i) {
      const a = n.points;
      if (!a)
        return;
      let o = [];
      return n.data[r.yField] === 0 ? (o.push(["M", a[0].x, a[0].y]), o.push(["L", a[1].x, a[1].y]), o.push(["L", a[2].x, a[2].y]), o.push(["L", a[3].x, a[3].y]), o.push("Z")) : (o.push(["M", a[0].x, a[0].y]), o.push(["L", a[1].x, a[1].y - t]), o.push(["L", a[2].x, a[2].y - t]), o.push(["L", a[3].x, a[3].y]), o.push("Z"), o = this.parsePath(o)), i.addShape("path", {
        attrs: {
          fill: n.color,
          path: o
        }
      });
    }
  });
}
function Mh(e, t, r) {
  return Qt("interval", e, {
    draw(n, i) {
      const a = n.points;
      if (!a)
        return;
      const o = this.parsePoint({ x: a[0].x, y: a[0].y }), s = this.parsePoint({ x: a[3].x, y: a[3].y }), l = {
        x: o.x - s.x,
        y: o.y - s.y
      }, u = Math.atan2(l.y, l.x);
      let f = 180 / Math.PI * u;
      f += 90, f < 0 && (f = 360 + f);
      let y = n.color;
      if (y)
        if (y.startsWith("#"))
          y += "00";
        else {
          const m = y.lastIndexOf(",");
          y = y.slice(0, m) + ",0)";
        }
      let d = [];
      return n.data[r.yField] === 0 ? (d.push(["M", a[0].x, a[0].y]), d.push(["L", a[1].x, a[1].y]), d.push(["L", a[2].x, a[2].y]), d.push(["L", a[3].x, a[3].y]), d.push("Z")) : (d.push(["M", a[0].x, a[0].y]), d.push(["L", a[1].x, a[1].y - t]), d.push(["L", a[2].x, a[2].y - t]), d.push(["L", a[3].x, a[3].y]), d.push("Z"), d = this.parsePath(d)), i.addShape("path", {
        attrs: {
          fill: `l(${f}) 0:${n.color} 1:${y}`,
          path: d
        }
      });
    }
  });
}
const Ih = {
  default: Oh,
  gradual: Mh
};
class kh {
  constructor(t) {
    nt(this, "chart");
    nt(this, "_option", {});
    nt(this, "defaultOption");
    nt(this, "heightIndex", 0);
    nt(this, "interval", /* @__PURE__ */ new Set());
    this.option = t, this.defaultOption = this._option;
  }
  get option() {
    return this._option;
  }
  set option(t) {
    this._option = te(t);
  }
  initChart(t) {
    this.chart = new ve(this.handlerChartOption(t)), this.configParams(this.chart, this.option), this.configView(this.chart, this.option.view), this.setAnnotation(this.option), this.render(), this.setCustomAnimation(this.option);
  }
  configView(t, r) {
    !r || r.length === 0 || r.forEach((n, i) => {
      const a = t.createView(), o = We(this.option, n);
      this.configParams(a, o, i);
    });
  }
  configParams(t, r, n) {
    this.setData(t, r), this.setDefaultConfig(t), this.setCoordinate(t, r), this.setTooltip(t, r), this.setPie(t, r, n);
  }
  handlerChartOption(t) {
    var n, i, a, o, s;
    const r = { container: t, padding: (n = this.option.chartBasic) == null ? void 0 : n.padding };
    return !((i = this.option.chartBasic) != null && i.height) || !((a = this.option.chartBasic) != null && a.width) ? (r.autoFit = !0, r) : (r.width = (o = this.option.chartBasic) == null ? void 0 : o.width, r.height = (s = this.option.chartBasic) == null ? void 0 : s.height, r);
  }
  configAnnotation(t, r) {
    if (!!r)
      if (ht(r))
        for (const n of r)
          this.chart.annotation()[t](n);
      else
        this.chart.annotation()[t](r);
  }
  setAnnotation(t) {
    !t.annotation || Object.entries(t.annotation).forEach(([r, n]) => {
      this.configAnnotation(r, n);
    });
  }
  setDefaultConfig(t) {
    t.animate(!1), t.legend(!1);
  }
  setData(t, r) {
    if (!r)
      return;
    let n = !0;
    for (const i of r.data) {
      if (!ui(i[r.yField])) {
        n = !1;
        break;
      }
      if (!i[r.xField]) {
        n = !1;
        break;
      }
    }
    if (!n) {
      console.error("\u6570\u636E\u7C7B\u578B\u9519\u8BEF!");
      return;
    }
    t == null || t.data(r.data);
  }
  setTooltip(t, r) {
    var i;
    const { tooltip: n } = r;
    if (!n) {
      t.tooltip(!1);
      return;
    }
    r !== void 0 && t.tooltip({
      showTitle: Boolean(n.title),
      customItems: n.customItems,
      domStyles: n.domStyles,
      title: (i = n.title) != null ? i : "",
      showMarkers: n.marker !== !1,
      marker: n.marker,
      itemTpl: n.itemTpl,
      showCrosshairs: Boolean(n.crosshairs),
      crosshairs: hr(n.crosshairs) ? {} : n.crosshairs
    });
  }
  setCoordinate(t, r) {
    var n, i, a, o;
    !r || t.coordinate("theta", {
      radius: (i = (n = r.coordinate) == null ? void 0 : n.radius) != null ? i : 0,
      innerRadius: (o = (a = r.coordinate) == null ? void 0 : a.innerRadius) != null ? o : 0
    });
  }
  setPie(t, r, n) {
    var s, l, u, f, y;
    if (!r)
      return;
    const i = `slice-shape${n != null ? n : "".toString()}`;
    (s = this.interval) == null || s.add(t.interval().adjust("stack").position(r.yField).color(r.xField, r.color).shape(i));
    let a = (u = (l = r.coordinate) == null ? void 0 : l.interval) != null ? u : 0;
    this.calculateDatascale(this.option.data).includes(1) && (a = 0);
    const o = (y = (f = r.style) == null ? void 0 : f.shape) != null ? y : "default";
    typeof o == "function" && o(), typeof o == "string" && Ih[o](i, a, this.option);
  }
  setCustomAnimation(t) {
    this.elementSelected(t);
  }
  calculateDatascale(t) {
    let r = 0;
    return t.forEach((n) => {
      r += n[this.option.yField];
    }), t.map((n) => n[this.option.yField] / r);
  }
  elementSelected(t) {
    var n, i, a, o, s, l;
    if (((n = t == null ? void 0 : t.animation) == null ? void 0 : n.elementSelected) === void 0 || this.calculateDatascale(this.option.data).includes(1))
      return;
    const r = t.data.length;
    if (ht((i = t.animation) == null ? void 0 : i.elementSelected)) {
      const u = (a = t.animation) == null ? void 0 : a.elementSelected.filter((f) => f < r);
      for (const f of u)
        for (const y of this.interval)
          y.elements[f].setState("selected", !0);
      return;
    }
    if (!(((o = t.animation) == null ? void 0 : o.elementSelected) >= r || !ui((s = t.animation) == null ? void 0 : s.elementSelected)))
      for (const u of this.interval)
        u.elements[(l = t.animation) == null ? void 0 : l.elementSelected].setState("selected", !0);
  }
  initOption() {
    this.interval.clear(), this.chart.clear();
  }
  render() {
    this.chart ? this.chart.render() : console.error("g2\u7ED8\u5236\u56FE\u5F62\u5931\u8D25");
  }
  updateConfig(t) {
    this.option = t, this.initOption(), this.configParams(this.chart, this.option), this.configView(this.chart.createView(), this.option.view), this.setAnnotation(this.option), this.render(), this.setCustomAnimation(t);
  }
}
const _e = /* @__PURE__ */ kt({
  __name: "Pie",
  props: {
    theme: null,
    data: { default: () => [] },
    xField: { default: "x" },
    yField: { default: "y" },
    color: null,
    chartBasic: null,
    tooltip: null,
    coordinate: null,
    view: null,
    animation: null,
    annotation: null,
    style: null
  },
  setup(e) {
    const t = e, r = L(), n = new kh(t);
    return re(() => {
      !r.value || n.initChart(r.value);
    }), wt(
      () => t,
      (i) => {
        n.updateConfig(i);
      },
      { deep: !0 }
    ), (i, a) => (ot(), st("div", {
      class: "chart",
      ref_key: "chartRef",
      ref: r,
      style: { height: "100%", width: "100%" }
    }, null, 512));
  }
}), Nh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _e
}, Symbol.toStringTag, { value: "Module" })), Ch = /* @__PURE__ */ kt({
  __name: "CircularProgress",
  props: {
    theme: null,
    xField: null,
    yField: null,
    color: null,
    chartBasic: null,
    data: null,
    coordinate: null,
    annotation: null,
    view: null,
    tooltip: null
  },
  setup(e) {
    const t = e, r = L(We({
      xField: "x",
      yField: "y",
      color: ["rgba(0,0,0,0)", "l(180) 0:rgba(255,255,255,1)  1:rgba(30,145,245,1)", "rgba(39, 52, 85, 0.5)"],
      tooltip: null,
      annotation: {
        image: [],
        text: [
          {
            content: "0",
            position: ["50%", "50%"],
            offsetX: -10,
            style: {
              fill: "rgba(255, 255, 255, 1)",
              fontSize: "20"
            }
          },
          {
            content: "%",
            position: ["50%", "50%"],
            offsetX: 5,
            style: {
              fill: "rgba(162, 167, 186, 1)",
              fontSize: 14
            }
          }
        ]
      },
      coordinate: {
        radius: 0.5,
        innerRadius: 0.75,
        interval: 0
      }
    }, t)), n = r.value.xField, i = r.value.yField, a = L("0"), o = L([]), s = L(!0), l = (d) => {
      let m = 0;
      return d.forEach(function(v) {
        m += v[`${i}`];
      }, 0), m;
    }, u = (d) => {
      const m = l(d), v = (d[0][`${i}`] + d[1][`${i}`] / m) * 100;
      return Math.ceil(v) === v ? v.toString() : v.toFixed(1);
    }, f = (d, m) => {
      m > 0 && (r.value.coordinate.interval = -2e-3), m > 0 && m < 10 && (r.value.annotation.text[0].offsetX = -7, r.value.annotation.text[1].offsetX = 10), m >= 10 && m < 100 && (r.value.annotation.text[0].offsetX = -15, r.value.annotation.text[1].offsetX = 10), d.indexOf(".") !== -1 && m > 10 && (r.value.annotation.text[0].offsetX = -26, r.value.annotation.text[1].offsetX = 13), d.indexOf(".") !== -1 && m < 10 && (r.value.annotation.text[0].offsetX = -15, r.value.annotation.text[1].offsetX = 13), m === 0 && (r.value.coordinate.interval = 0), m === 100 && (r.value.annotation.text[0].offsetX = -20, r.value.annotation.text[1].offsetX = 15);
    }, y = (d) => {
      const m = t.data[0][`${n}`], v = t.data[1][`${n}`], M = t.data[0][`${i}`], k = t.data[1][`${i}`];
      d <= 16.6 && d >= 0 && (r.value.color = o.value[0]), d > 16.6 && d <= 50 && (r.value.color = o.value[1]), d > 50 && d < 70 && (r.value.color = o.value[2]), d >= 70 && d < 80 && (r.value.data = [
        { x: "test", y: M * 0.5 },
        { x: m, y: M * 0.5 },
        { x: v, y: k }
      ], r.value.color = o.value[3]), d >= 80 && d <= 100 && (r.value.data = [
        { x: "test", y: M * 0.6 },
        { x: m, y: M * 0.4 },
        { x: v, y: k }
      ], r.value.color = o.value[4]);
    };
    return wt(
      () => t.data,
      (d) => {
        const m = d.slice();
        m.unshift({ x: "test", y: 0 }), r.value.data = m;
        const v = u(m);
        r.value.annotation.text[0].content = v, a.value = v;
      },
      {
        deep: !0,
        immediate: !0
      }
    ), wt(
      () => t.theme,
      (d) => {
        d === "blueDark.circular" ? (o.value = [
          ["rgba(0,0,0,0)", "l(180) 0:rgba(255,255,255,1)  1:rgba(67, 92, 220, 1)", "rgba(67, 92, 220, 0.2)"],
          ["rgba(0,0,0,0)", "l(270) 0:rgba(255,255,255,1)  0.3:rgba(255,255,255,1) 1:rgba(67, 92, 220, 1)", "rgba(67, 92, 220, 0.2)"],
          ["rgba(0,0,0,0)", "l(270) 0:rgba(255,255,255,1) 1:rgba(67, 92, 220, 1)", "rgba(67, 92, 220, 0.2)"],
          ["rgba(67, 92, 220, 1)", "l(0) 0:rgba(255,255,255,1) 0.2:rgba(255,255,255,1) 0.9:rgba(67, 92, 220, 1) 1:rgba(67, 92, 220, 1)", "rgba(67, 92, 220, 0.2)"],
          ["rgba(67, 92, 220, 1)    ", "l(90) 0:rgba(255,255,255,1) 0.2:rgba(255,255,255,1) 0.9:rgba(67, 92, 220, 1) 1:rgba(67, 92, 220, 1)", "rgba(67, 92, 220, 0.2)"]
        ], s.value = !0) : d === "lightOrange.circular" && (o.value = [
          ["rgba(0,0,0,0)", "l(180) 0:rgba(210, 182, 155, 0.2)  1:rgba(255, 141, 107, 1)", "rgba(255, 141, 107, 0.1)"],
          ["rgba(0,0,0,0)", "l(270) 0:rgba(210, 182, 155, 0.2)  0.3:rgba(210, 182, 155, 0.2) 1:rgba(255, 141, 107, 1)", "rgba(255, 141, 107, 0.1)"],
          ["rgba(0,0,0,0)", "l(270) 0:rgba(210, 182, 155, 0.2) 1:rgba(255, 141, 107, 1)", "rgba(255, 141, 107, 0.1)"],
          ["rgba(255, 141, 107, 1)", "l(0) 0:rgba(210, 182, 155, 0.2) 0.4:rgba(210, 182, 155, 0.2) 0.9:rgba(255, 141, 107, 1) 1:rgba(255, 141, 107, 1)", "rgba(255, 141, 107, 0.1)"],
          ["rgba(255, 141, 107, 1)", "l(90) 0:rgba(210, 182, 155, 0.2) 0.3:rgba(210, 182, 155, 0.2) 0.9:rgba(255, 141, 107, 1) 1:rgba(255, 141, 107, 1)", "rgba(255, 141, 107, 0.1)"]
        ], r.value.annotation.text[0].style.fill = "rgba(102, 102, 102, 0.8)", r.value.annotation.text[1].style.fill = "rgba(102, 102, 102, 0.8)", s.value = !1), y(parseInt(a.value));
      },
      {
        immediate: !0
      }
    ), wt(
      a,
      (d) => {
        const m = parseInt(d);
        f(d, m), y(m);
      },
      { immediate: !0 }
    ), (d, m) => (ot(), st("div", {
      class: uo({ "progress-box": !0, bluedark: s.value, lightorange: !s.value })
    }, [
      Ve(_e, {
        tooltip: r.value.tooltip,
        color: r.value.color,
        chartBasic: r.value.chartBasic,
        coordinate: r.value.coordinate,
        data: r.value.data,
        annotation: r.value.annotation
      }, null, 8, ["tooltip", "color", "chartBasic", "coordinate", "data", "annotation"])
    ], 2));
  }
});
const Fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ch
}, Symbol.toStringTag, { value: "Module" }));
class Eh {
  constructor(t) {
    nt(this, "chart");
    nt(this, "_option", {});
    this._option = t;
  }
  get option() {
    return this._option;
  }
  set option(t) {
    this._option = te(t);
  }
  initChart(t) {
    this.chart = new ve(this.handlerChartOption(t)), this.setOption(this.option), this.redner();
  }
  setOption(t) {
    this.setBase(), this.setData(t), this.setPointer(t), this.setAxis(t), this.setCoordinate(t), this.setScale(t), this.setAnnotation(t.annotation);
  }
  handlerChartOption(t) {
    var n, i, a, o, s;
    const r = { container: t, padding: (n = this._option.chartBasic) == null ? void 0 : n.padding };
    return !((i = this._option.chartBasic) != null && i.height) || !((a = this._option.chartBasic) != null && a.width) ? (r.autoFit = !0, r) : (r.width = (o = this._option.chartBasic) == null ? void 0 : o.width, r.height = (s = this._option.chartBasic) == null ? void 0 : s.height, r);
  }
  setBase() {
    this.chart.animate(!1), this.chart.legend(!1), this.chart.point().position("value*1").shape("pointer");
  }
  setAxis(t) {
    var n, i, a, o, s, l;
    const r = {
      line: null,
      grid: null,
      label: t.axis.label,
      tickLine: t.axis.tickLine,
      subTickLine: t.axis.subTickLine
    };
    this.chart.axis("1", !1), this.chart.axis("value", r), this.chart.annotation().arc({
      top: !1,
      start: [(n = t.scale.min) != null ? n : 0, 1],
      end: [(i = t.scale.max) != null ? i : 0, 1],
      style: {
        stroke: (a = this._option.axis.backgroundColor) != null ? a : "#CBCBCB",
        lineWidth: (o = this._option.axis.lineWidth) != null ? o : 10,
        lineDash: null
      }
    }), this.chart.annotation().arc({
      start: [0, 1],
      end: [t.data, 1],
      style: {
        stroke: (s = this._option.axis.foreground) != null ? s : "#1890ff",
        lineWidth: (l = this._option.axis.lineWidth) != null ? l : 10,
        lineDash: null
      }
    });
  }
  setPointer(t) {
    Qt("point", "pointer", {
      draw(r, n) {
        var o, s;
        const i = n.addGroup(), a = this.parsePoint({ x: 0, y: 0 });
        return i.addShape("line", {
          attrs: {
            ...(o = t.pointer) == null ? void 0 : o.line,
            x1: a.x,
            y1: a.y,
            x2: r.x,
            y2: r.y,
            lineCap: "round"
          }
        }), i.addShape("circle", {
          attrs: {
            ...(s = t.pointer) == null ? void 0 : s.circle,
            x: a.x,
            y: a.y,
            lineCap: "round"
          }
        }), i;
      }
    });
  }
  setScale(t) {
    this.chart.scale("value", t.scale);
  }
  setData(t) {
    this.chart.data([{ value: t.data }]);
  }
  setCoordinate(t) {
    this.chart.coordinate("polar", {
      ...t.coordinate
    });
  }
  configAnnotation(t, r) {
    if (!!r)
      if (ht(r))
        for (const n of r)
          this.chart.annotation()[t](n);
      else
        this.chart.annotation()[t](r);
  }
  setAnnotation(t) {
    !t || Object.entries(t).forEach(([r, n]) => {
      this.configAnnotation(r, n);
    });
  }
  redner() {
    var t;
    (t = this.chart) == null || t.render();
  }
  update(t) {
    this.chart.clear(), this.setOption(t), this.redner();
  }
}
const Dh = /* @__PURE__ */ kt({
  __name: "DashBoard",
  props: {
    theme: null,
    chartBasic: null,
    data: null,
    coordinate: null,
    axis: null,
    scale: null,
    pointer: null,
    annotation: null
  },
  setup(e) {
    const t = e, r = L(), n = new Eh(t);
    return re(() => {
      n.initChart(r.value);
    }), wt(
      () => t,
      (i) => {
        n.update(i);
      },
      {
        deep: !0
      }
    ), (i, a) => (ot(), st("div", {
      style: { width: "100%", height: "100%" },
      ref_key: "chartContainer",
      ref: r
    }, null, 512));
  }
}), jh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dh
}, Symbol.toStringTag, { value: "Module" })), Lh = "data:image/png;base64,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", Rh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAYAAABUfC3PAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAABMMSURBVHic7Z17eNTFuce/7/x+e8vmtrknXBQQQaAVgSrYKrG21BiCnsseL0CM2pM+xFLlHvC03dPztISLLTYFj3mOFoXYU1NrlWBUbOVoT6EqSlsDFAuIXLIh5L6bbLK/mff8oXgQs5vNZnezhXyeJ3+wO/POO/tlZn4z8878gGGGGWaYYYYZZphhYgcNtQOhcmbFihyTUlfqQuSCOZOBMYqZCcgg5l7WNAmlFJiVRuRRSrWAqAlAi9C0j3p8vqPplZUdQ12PUIhbUVqWL5+iE81k5qsBTCTArpgPCuAAgCMMdBNzp1LKRyZTJwyDAYANg3VdT5BKJUAIB4gymHm0IBpNzD4S4gQRHery+d7L/NnPTg9tLfsmrkRpW7ZsutC0OWD+GgNMzLsMpf4i/P6/tnZ2nhqzdasvXNvsdGreyy/PJJ8vVxJdzpo2FcyaIHpfGsbbqZWVRyJZl8Ew5KKcKStLtCYmOhVQQsw+Vup5Xdf/126z1ZPLpaJVLgPUvGRJnkWpcSTEdKWUrjTt3RSP5w2qqvJHq9xQGDJROpcvz2IhHlJAIUv5pibEL17+8MO9/1JTI2PtCwPUvXTpSEOp6WCeBOD9pO7u16iqqivWvgBDIMqZsrJES1LSUih1F4h+aSZ60rZu3Uex9iMQzYsXJ9s07Qt+pWZomvZXu2G8TpWVPbH0IaaitK5ceY8AHlZEL/cq9Wj2hg1x049fSNN99yVZExNnQIhJEtiTumnTu7EqOyaidCxdeiVr2nomSlBEy9LWrftLLMqNBB2lpRmw2WYSYE8keoU2bWqLdplRF6Vz1apvKaCcmLckJSQ8Si5Xb7TLjDQMkKesbCJZLNeahHjb8sgjB6JZXtREYZfL3NHd/TiYr1CG8W3Hj3/8p2iVFSu4tDTFa7XOApG0Oxyvk8tlRKOcqIjStmLFOAhRTcyHe4EHMtev74xGOUMBO51ae27uVAGM7mptfTVn2zZvpMuIuCht5eXTFXO1AP4r5ejRn9AQPOJGGwaoffHisYJoihTifxwRHmciKkpbefl0AC8wsNhRUfF8JG3HI40PPphtlXIqS/lW6mOPtUbKbsRE6Vi9+gZmfg7M96asW7czUnbjnfb770/T7faZUso/Jm/e3BwJmxERpbW8/Bow1wqg9FIS5BxtixY5dJNpWg/z25FYiRaDNdBeXn4FEdUQ0dJLURAASH3ssVbp9b6XIMTUYyUl1sHaG5QoHyxebFHAC8T8VGpFxS8H68zfMylPPNGiiD7ITkqayi7XoH7XQWXOtNt/Tsz7k48c+dFg7Fws2DdtaugFmjzNzRMHYydsUTrKy0sATPRJWXoxPvaGS0p6+jEoRWfKynLCtRHWQN+5bNkkaTLtgVI3p65f/064hV+scEmJtSsp6arTwIHxYawwh9VSlK4/TsBPhgXpG9q61Sd7ek7kSDk2nPwDFqWtvLyUiUzJR478RzgFXiokVVU1S+YefuCB9IHm1QeSuHP16kzJXKGkvG14HAkOAfyBrp8ymMcw0EIAh5p3QC1FEbkAvJa2YcObA3XyUmR8ZWWPVdNaUVaWPZB8IYty9uGHRyjmYkH0bwN379LF7nA091gsCex0aqHmCVkUXamHWanq5LVrD4fn3qUJuVyGz+dr9eTkpIWaJyRRWlatSgHzfboQPw7fvUuXlLNnOzSTycohTkFCEoWEuB9Eu4dbSXhQTY30t7d7W0tLk0NJH9LTFwHfYSm/MzjXIg87nZrb0n0DE08lFhZAHjN65Gujal5pGWrfLuRkR4fnsszMNADt/aXtt6W0lZd/Fcy0/623XoqIdxGieX5BcqPVV06EmQK8xyxRS0TCZDV/91RxwTVD7d+FTK6p6WVNk1xaauovbb8thZkLhRC/umn37qgECYTDBwUFll7SlkBxfW517a/O+6q+8Z6CtzWlP9B4T0FH9lN1cRVXluh2e1pycmwAgobF9j+mCHGXYI6rfZKUTK1IgNwXCAIAyH6q7ogg2qak/q8nnLNsQ+FfIHY3NfnTlOq3pQQVpWXNmi8Ss/bO3r1vRM61wXGm5NYcxfTlLk9nwP2brKdffA9Qx022jDmx9K0/btq922hXSvW33xK0+xLMtxDw8lB2XSecs2xkS0gAAO7u6lKKbgX4d2N+sztoBAlLUUOEh88483/ba9MsAGAXUjq2Bs8XbVKsVh8AM4CAxzqCisLM1xPwaqQd64/m+QXJvUS3kNCuBnMigbqZmWFNsEPBDOLj7uIiJjIOZo2pO0YufHpk4mTxzenCsEwWQk1kkElaEzdojA4wsY+huxcWmRh8WJLaNfLpl2L+iL/P6zWm9/RYgqUJKgoRXc/MMV0NPn33rZf1kvgOoP5oSOOxEdV1p84t5p1aUHi9RmKGAu/SJCay0O90/21uWsN87BEk2pnUDFaURqQOsqL9EDgsQDOyt+/YeM7+sdvzUxMSUyYxcG/j/LlvZVfXxjQUanpenjz70UdBJ5EB+7ZPZvGprW53feRd6xt2QWi6tkgHqnO3v/TsyOq6k+evrupEX1Tgd/O27TyYXV37vPB1PkqEQ4LoJgU1DyC7AXo8p3rnk7nP1L7laZZ7FPHlp4uKEs7ZGPOb3W3Z21/4g6ld/IgFpjXcVTQ5VvUDAHK5VIbVysFm9wFF0YSYyER1gznSNlAaDhZOYOa2zO21fR87YIwX6D3M+fm6u7horrQlfR/gzi5P58Nv9tgeUpJe1cHfbFhQuOiY89ac8XV1PYLpQ81BV1xoKvPFFzuVVLvIpK6LesUu4GRTk4TLFVCUgN1Xytq1f2Tg9ui41TeahVJZ4Wxf3zXcW5AJSX4DemrjaMuDgnHU4utdm/LZ2fsb70yfvmfU5JzZVqu23D2/aDeIjjJ4DIA/X2iTWGtmVl+KVn0C0QFIfNwg+jw+GFCUUBfPIonfUN1CiD7Xh5TESGK26RD3Aqo6a9vO9/tKN2PfPj/24bXjdxfuM2t0N4ArSalDfaUlgSTF7IlgFUJiEiBx+nTAXmrQwXiRpLuVD4Jw2fljAAC0ltyeqrF+KwOn/L7mH+QEEOR8LntmZ2vuttrNrPCyAn2hccHcqy9MQ4SrQSJmY+anTJ4cdBcyrkQZX1fXIwh/oWTMPvdZ413zsnsNY41iJLDkP42q2dM9EJu6hX5PAlIS7jw5f+7N5z4/4fxGmiKM132e/ZGsQ8jk5QUUJq5EAQDW5Asg/lrz/ILkxrvmZcPES5jlr4nwAWliwA8dGfopHxSZ7D7/Bl0g/5wwJov5nwH+XVbN7ph3X3C5wm4pQ3KcO/fndU1KqTd6SPum0tQyJfFcTnXdXmKYSWHAMVRUtc/PxNxi7+ky+3wbNcLsxgVF3wLxqJwTnphPjD+lvj6MluJ0DtkZe+VvfZUIY5lwNLd6x9sAQMRCsQrr0gEC+XVvJqXVvNYOSb9kwjQBvEJxtPJ9PnHXfQGAZkn/RzD2ETi3ccG8rwOAZFaKyRyOPQabfB6Pci+ck0U6z1eMVxkoGtJV5CCDfWBRJk8ekpZy+u5bLyPwVKPH9t9mpR5RJL9yemHhN0igx6IPXJR6p9NMzJSSTQ7AvESy/1d523c8x0z7dYujKBp1CIkg40rwlhJk1hkthKbdBhK1o2pqutOr6zrMSj1CwPVQmGIoJPRv4bPkotVGpBlSassl+2tGbH/lXQDQzFQL0q49fnehI/K1GByBRTl9OvZXhDjzE8E81nPW2Hvus/Tqug7PWfUjInEaAjPbBvAjugDRY7F9g6EkS1l5ThAAyHzyxU4w15sFfW7+MtQEbyn19TEVhiyJV4Lo6Pi6us88ZX38b7WLgKRuIda4FxZ9tT9bp+6cM6p04dw1IJ4O5vq8Z146/rlETO9rhJguSIZC4KX7jyc3Ah+v08QEJWABo89z6X6fcdpsNSuhy0ekod3TsHDuDCHkcxfuwzfdNy/J8MtbwOJaQfxrJTGCCQEmnIZXQgz6OFw4BIstDtxS6uv5ZGvrgALABwspfxNDjejru4/DhliSTxe523esE4Q3WWkl7uKixQ133nL5GWd+oru46DZl8PfAgrSezn/Pfrp2DwmMB6tjfdkUZBrBEGeiW6vP07FmzfMtq1ffEOj7wKLU1KiRmZkhx79Ggqztr/wNTBSoe2LQYUPICQCQ/XTtnmxbww9IoZdMptXKYt/ICrP80ng0d/uOZ7NqdntOOGfZwMjLacHnolpOFt+czqS+KoDfR7te53OspMTKzAVQ6nOr1ucI2BII4Cafj9jlEtG8oe5zmOQWkvqyhoVzrxIk3hQ6jmWMftELF7jB4L/qmvhy4/x5vSzUpMYuugrELRrjF72G1q7p/CVd6CsaFxSdUMQHBJNZAcdx3XV+V12d+L7TqZ8xdY1kgSmsaLZS6oW8Z17qsxVFC0dOzmQA7Wnr1gUMygs6kHNZWeI+w+iZEePr+zg/X28ckTibBU8liJHAp4/CXUxsgcIBIbDPZ/Chy57Z2XphXndu0gShYaIizAazn4gSAYCIJZjcDHWYdfXb3J/XNcWyXgDQXl5epoA5joqKgHtVwceMrCxjen29jn6CxyLNJ8sfv/3k7zO4i+feIYhV1tM79wTJW988v6C9l/RZLT22NZNrauLpOqvriPkPwRL090jsb8/IGJKnk0BYhP6KgrjevXBOVrB0vULcIQRejSdBXs/P15lorsG8I1i6oKJQTY1MEUK8np8f06ewYDi2/qaNwbuILcUcwK+G4sKbBERy1vHO38Xav2DMmDnzRgZ6MtavPxgsXb8Lki1C+POvuabfUMtYkrOttk6SMhpH24s/KCj4TAyVe37RTGIUkU8+Fm+rwIqoEMAv+kvXbwtwu90+c05OChBoAhZ7COBjmvc/E2RiSVKG9v2GhXN/z1J5iGgKaRit9+o/Sa95wT3Ufp7P6/n5OgP/BKWK+0sb0jKKp6wsx97U1EJx1D+fw72wcApBXCPBVpZ8jDrFH/J27BiS+4SD0bpy5TzStA2pa9dO6C9tSGNFr2F0y+TkRABxdxjnkyCKfgMphhrStDIGNoeSNqRNLkdVVYcpJcU+kBOuw/w/natXT2LmG1mpp0JJH9qZR4Cl3+9rz8gI6czeMJ9FMi8hoq3BZvHnE/J2cKLb3WLV9bRAj6HD9E3H6tVXMnCnIcQPQ80TsihUUyMtUnq9V1wx4LtGLmWUUmuFEE9k/PCHp0LNM7DAiS1bGpXdnsouV1gBDJcaHatWfQVENxlm8/cGkm9AohDASYZxtr2xceRQxBr/PcFOp6aINgIoT3e5BnTZ54BDjGjz5maNyNK5bNlwNxaEjnHjvkuAP7WiomqgecOK+3Jr2lGtt3cUR+Bm0YuRtpUrZzDRg8Lv/1Y4+cMSZXxlZQ9L2eCx28cN9mbRiw338uV2CFElmJckhfn2iLB/0MQtW9wQgtubm8eEa+Nig51OzarrTwA4lFxRsTVcO4P6X56Ynn7IDGR6S0tzB2PnYqFj3Lg1YJ7Q5PXeOxg7gxKFXC7V2Nm5X9hs43nRoriLNIwlbeXld4DoHiJyhnPD6vkMejwYs3Wrr0up/V6TaVrbJSpM+6pVhQAeUczOlIqKvw3WXkQG6fTKyg4l5X4SYlb7/feHfAPcxUDLqlWFIHpCSXmHo6LivUjYjOz7UxYtcpCmXevTtP3Zjz7aGEnb8Uhrefk/EFAJ4LbUiop9kbIb8Vl560MPpWpKzVbM78fTq18jCTudWvvYsasAFLNSdzo2bIjoucmoLJW4Fy60JzgccxTwUUpDw/6L6Q7jppUrk8xCbAbzeFZqQWoU3lUZlYlfzrZt3qS0tB06UVpHbu7XW0pLU6JRTqxpXbr0ap3oJWb2J9tss6MhCBCL9zw+8MBk0rQZbBhvJW7ZcmggN1nHC+xymdu7uh4kojIBVCStW/d4NMuLyUpv26JFDs1snsOAF93de5Orqvq86iMeaV2xYioBG0gILxMtTa2oOBrtMmO6/O596KFpCpgFpQ74PJ53Mp98Mm7f/9hWXj6WlHoQzHMUUYVj/fqQ9tcjQcz3RHjxYouX6CYJTCBgn5/5z5F4uVikaFm1arTGfB+Y72Cip3s9nsqsLVtiegHCkG1UcWlpQqfN9jUIMUVjPiCUetf605+eGIox51mnUysYPfrLStOcxHwjiHaSUpuSNm6M+YEiIA52D7m01ORNTLwRzNMAGKzUPk2po7bKylPRFIhdLuFtb58shbiBhbgdgImBbX6v99lYt4wLGXJRzqdt8eJxmq5/CURTFLMkKfdrzB+ylA32pqamwcx3jpWUWB0ORx4JMYGIvqiAW0DEgmiXodTOtI0bA56sijVxJcr5NH3723kWs3kagInEPJKZrRDiuFDqI6lUsyFEuxCii/x+D6xWkGEQpCRd1xN9gE0nSiLABmAciK5iYBKYvUKIegbeJ+a9SRs3xmVkZdyKciHu5cvtSUpdKYERADLAnElEKQpIAZEAIIhIg1IWAA0MWCDEEUHUBKUa2Oerj9RrZIcZZphhhhlmmGGGuZj4PwjNKHqlF5ZLAAAAAElFTkSuQmCC", zh = { class: "circular" }, Zh = {
  key: 0,
  src: Lh,
  alt: ""
}, Wh = {
  key: 1,
  src: Rh,
  alt: ""
}, Ph = /* @__PURE__ */ kt({
  __name: "AutoLightCircular",
  props: {
    theme: null,
    data: null,
    xField: { default: "x" },
    yField: { default: "y" }
  },
  emits: ["highLight"],
  setup(e, { emit: t }) {
    const r = e, n = ["rgba(232, 93, 77, 1)", "rgba(255, 176, 101, 1)", "rgba(206, 157, 109, 1)", "rgba(210, 182, 155, 1)", "rgba(240, 192, 146, 1)"], i = ["rgba(232, 93, 77, 0.6)", "rgba(255, 176, 101, 0.6)", "rgba(206, 157, 109, 0.6)", "rgba(210, 182, 155, 0.6)", "rgba(240, 192, 146, 0.6)"], a = ["#8574F3", "#1E91F5", "#D0EBFF", "#2A93C7", "#5E85B2", "#C05DB1"], o = ["#8574F360", "#1E91F560", "#D0EBFF60", "#2A93C760", "#5E85B260", "#C05DB160"], s = L(a), l = Dt(() => r.theme.includes("light") ? "circular-light" : "circular-dark"), u = L([
      {
        color: o,
        coordinate: {
          innerRadius: 0.65,
          radius: 0.9,
          interval: 0.01
        }
      }
    ]), f = Dt(() => r.data), y = {
      innerRadius: 0.94,
      radius: 0.9,
      interval: 0.01
    };
    let d = 0;
    const m = L({
      elementSelected: d
    });
    return t("highLight", d), setInterval(() => {
      d += 1;
      const v = f.value.length;
      d > v - 1 && (d = 0), m.value.elementSelected = d, t("highLight", d);
    }, 3e3), wt(
      () => r.theme,
      (v) => {
        v.includes("light") ? (s.value = n, u.value[0].color = i) : (s.value = a, u.value[0].color = o);
      },
      {
        immediate: !0
      }
    ), (v, M) => (ot(), st("div", zh, [
      Ve(_e, {
        style: { width: "100%", height: "100%" },
        theme: e.theme,
        color: s.value,
        data: yt(f),
        coordinate: y,
        "x-field": e.xField,
        "y-field": e.yField,
        view: u.value,
        animation: m.value
      }, null, 8, ["theme", "color", "data", "x-field", "y-field", "view", "animation"]),
      yt(l) === "circular-dark" ? (ot(), st("img", Zh)) : (ot(), st("img", Wh))
    ]));
  }
});
const Bh = /* @__PURE__ */ Xe(Ph, [["__scopeId", "data-v-46f6d26e"]]), Vh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bh
}, Symbol.toStringTag, { value: "Module" })), Gh = "data:image/png;base64,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", Yh = "data:image/png;base64,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", Uh = { class: "circular" }, Hh = {
  key: 0,
  class: "dark-img",
  src: Gh,
  alt: ""
}, Jh = {
  key: 1,
  class: "light-img",
  src: Yh,
  alt: ""
}, Xh = { class: "content" }, _h = /* @__PURE__ */ kt({
  __name: "AutoLightTextMarkerCircular",
  props: {
    theme: null,
    data: null,
    xField: { default: "x" },
    yField: { default: "y" }
  },
  emits: ["highLight"],
  setup(e, { emit: t }) {
    const r = e, n = ["rgba(232, 93, 77, 1)", "rgba(255, 176, 101, 1)", "rgba(206, 157, 109, 1)", "rgba(210, 182, 155, 1)", "rgba(240, 192, 146, 1)"], i = ["#8574F3", "#1E91F5", "#D0EBFF", "#2A93C7", "#5E85B2", "#C05DB1"], a = L(i), o = Dt(() => r.theme.includes("light") ? "circular-light" : "circular-dark"), s = Dt(() => o.value === "circular-dark" ? "rgba(255, 255, 255, 0.7)" : "rgba(102, 102, 102, 0.8)"), l = Dt(() => r.data), u = {
      innerRadius: 0.8,
      radius: 0.9,
      interval: 0.01
    };
    function f(v) {
      let M = 0;
      return r.data.forEach((k) => {
        M += k[r.yField];
      }), {
        persent: (r.data[v][r.yField] / M * 100).toFixed(0) + "%",
        text: r.data[v][r.xField]
      };
    }
    const y = L(f(0));
    let d = 0;
    const m = L({
      elementSelected: d
    });
    return t("highLight", d), setInterval(() => {
      d += 1;
      const v = l.value.length;
      d > v - 1 && (d = 0), m.value.elementSelected = d, y.value = f(d), t("highLight", d);
    }, 3e3), wt(
      () => r.theme,
      (v) => {
        v.includes("light") ? a.value = n : a.value = i;
      },
      {
        immediate: !0
      }
    ), (v, M) => (ot(), st("div", Uh, [
      Ve(_e, {
        style: { width: "100%", height: "100%" },
        theme: e.theme,
        color: a.value,
        data: yt(l),
        coordinate: u,
        "x-field": r.xField,
        "y-field": r.yField,
        animation: m.value,
        view: []
      }, null, 8, ["theme", "color", "data", "x-field", "y-field", "animation"]),
      yt(o) === "circular-dark" ? (ot(), st("img", Hh)) : (ot(), st("img", Jh)),
      J("div", Xh, [
        J("div", {
          class: "persent",
          style: Gt({ color: yt(s) })
        }, Le(y.value.persent), 5),
        J("div", {
          class: "divider",
          style: Gt({ backgroundColor: yt(s) })
        }, null, 4),
        J("div", {
          class: "text",
          style: Gt({ color: yt(s) })
        }, Le(y.value.text), 5)
      ])
    ]));
  }
});
const qh = /* @__PURE__ */ Xe(_h, [["__scopeId", "data-v-38e9409a"]]), Qh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qh
}, Symbol.toStringTag, { value: "Module" })), Kh = { class: "circular" }, $h = { class: "content" }, td = { class: "persent" }, ed = { class: "value" }, rd = { class: "suffix" }, nd = { class: "text" }, id = /* @__PURE__ */ kt({
  __name: "TextMarkerCircular",
  props: {
    theme: null,
    data: null,
    xField: { default: "x" },
    yField: { default: "y" },
    color: null,
    view: null,
    animation: null
  },
  setup(e) {
    const t = e, r = [
      "rgba(30, 145, 245, 1)",
      "rgba(215, 239, 252, 1)",
      "rgba(133, 116, 243, 1)",
      "rgba(94, 133, 178, 1)"
    ], n = [
      "rgba(30, 145, 245, 0.1)",
      "rgba(215, 239, 252, 0.1)",
      "rgba(133, 116, 243, 0.1)",
      "rgba(94, 133, 178, 0.1)"
    ], i = L(t.xField), a = L(t.yField), o = Dt(() => {
      let m = t.data;
      return m = t.data.map((v) => ({
        [i.value]: String(v[t.xField]),
        [a.value]: v[t.yField]
      })), m;
    }), s = Dt(() => t.animation), l = L(r);
    t.color !== void 0 && (l.value = t.color);
    const u = {
      innerRadius: 0.94,
      radius: 0.9,
      interval: 0.01
    }, f = L([{
      color: n,
      coordinate: {
        innerRadius: 0.65,
        radius: 0.85,
        interval: 0.01
      }
    }]);
    t.view === void 0 || t.view.length === 0 || t.view[0].color === void 0 || t.view[0].color.length === 0 || (f.value[0].color = t.view[0].color);
    function y(m) {
      let v = 0;
      t.data.forEach((k) => {
        v += k[t.yField];
      });
      const M = (t.data[m][t.yField] / v * 100).toFixed(1);
      return (M === "100.0" || t.data.length === 1) && (f.value[0].coordinate.interval = 0, u.interval = 0, s.value.elementSelected = null), {
        persent: M,
        suffix: "%",
        text: t.data[m][t.xField]
      };
    }
    const d = L(y(0));
    return wt(
      () => {
        var m;
        return (m = t.animation) == null ? void 0 : m.elementSelected;
      },
      (m) => {
        d.value = y(m);
      }
    ), (m, v) => (ot(), st("div", Kh, [
      Ve(_e, {
        color: l.value,
        data: yt(o),
        coordinate: u,
        "x-field": t.xField,
        "y-field": t.yField,
        animation: yt(s),
        view: f.value
      }, null, 8, ["color", "data", "x-field", "y-field", "animation", "view"]),
      J("div", $h, [
        J("div", td, [
          J("span", ed, Le(d.value.persent), 1),
          J("span", rd, Le(d.value.suffix), 1)
        ]),
        J("div", nd, Le(d.value.text), 1)
      ])
    ]));
  }
});
const ad = /* @__PURE__ */ Xe(id, [["__scopeId", "data-v-04f97c46"]]), od = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ad
}, Symbol.toStringTag, { value: "Module" }));
var dr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sd(e) {
  var t = e.default;
  if (typeof t == "function") {
    var r = function() {
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Za = {}, qe = { exports: {} };
(function(e) {
  var t, r, n, i, a, o, s, l, u, f, y, d, m, v, M, k, S, A, C, V, Y, _, tt, et, ut, xt, St, At, ct;
  (function(T) {
    var P = typeof dr == "object" ? dr : typeof self == "object" ? self : typeof this == "object" ? this : {};
    T(q(P, q(e.exports)));
    function q(c, h) {
      return c !== P && (typeof Object.create == "function" ? Object.defineProperty(c, "__esModule", { value: !0 }) : c.__esModule = !0), function(g, p) {
        return c[g] = h ? h(g, p) : p;
      };
    }
  })(function(T) {
    var P = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, h) {
      c.__proto__ = h;
    } || function(c, h) {
      for (var g in h)
        Object.prototype.hasOwnProperty.call(h, g) && (c[g] = h[g]);
    };
    t = function(c, h) {
      if (typeof h != "function" && h !== null)
        throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
      P(c, h);
      function g() {
        this.constructor = c;
      }
      c.prototype = h === null ? Object.create(h) : (g.prototype = h.prototype, new g());
    }, r = Object.assign || function(c) {
      for (var h, g = 1, p = arguments.length; g < p; g++) {
        h = arguments[g];
        for (var b in h)
          Object.prototype.hasOwnProperty.call(h, b) && (c[b] = h[b]);
      }
      return c;
    }, n = function(c, h) {
      var g = {};
      for (var p in c)
        Object.prototype.hasOwnProperty.call(c, p) && h.indexOf(p) < 0 && (g[p] = c[p]);
      if (c != null && typeof Object.getOwnPropertySymbols == "function")
        for (var b = 0, p = Object.getOwnPropertySymbols(c); b < p.length; b++)
          h.indexOf(p[b]) < 0 && Object.prototype.propertyIsEnumerable.call(c, p[b]) && (g[p[b]] = c[p[b]]);
      return g;
    }, i = function(c, h, g, p) {
      var b = arguments.length, w = b < 3 ? h : p === null ? p = Object.getOwnPropertyDescriptor(h, g) : p, I;
      if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        w = Reflect.decorate(c, h, g, p);
      else
        for (var E = c.length - 1; E >= 0; E--)
          (I = c[E]) && (w = (b < 3 ? I(w) : b > 3 ? I(h, g, w) : I(h, g)) || w);
      return b > 3 && w && Object.defineProperty(h, g, w), w;
    }, a = function(c, h) {
      return function(g, p) {
        h(g, p, c);
      };
    }, o = function(c, h, g, p, b, w) {
      function I(Ft) {
        if (Ft !== void 0 && typeof Ft != "function")
          throw new TypeError("Function expected");
        return Ft;
      }
      for (var E = p.kind, rt = E === "getter" ? "get" : E === "setter" ? "set" : "value", N = !h && c ? p.static ? c : c.prototype : null, B = h || (N ? Object.getOwnPropertyDescriptor(N, p.name) : {}), K, U = !1, mt = g.length - 1; mt >= 0; mt--) {
        var R = {};
        for (var H in p)
          R[H] = H === "access" ? {} : p[H];
        for (var H in p.access)
          R.access[H] = p.access[H];
        R.addInitializer = function(Ft) {
          if (U)
            throw new TypeError("Cannot add initializers after decoration has completed");
          w.push(I(Ft || null));
        };
        var Ct = (0, g[mt])(E === "accessor" ? { get: B.get, set: B.set } : B[rt], R);
        if (E === "accessor") {
          if (Ct === void 0)
            continue;
          if (Ct === null || typeof Ct != "object")
            throw new TypeError("Object expected");
          (K = I(Ct.get)) && (B.get = K), (K = I(Ct.set)) && (B.set = K), (K = I(Ct.init)) && b.push(K);
        } else
          (K = I(Ct)) && (E === "field" ? b.push(K) : B[rt] = K);
      }
      N && Object.defineProperty(N, p.name, B), U = !0;
    }, s = function(c, h, g) {
      for (var p = arguments.length > 2, b = 0; b < h.length; b++)
        g = p ? h[b].call(c, g) : h[b].call(c);
      return p ? g : void 0;
    }, l = function(c) {
      return typeof c == "symbol" ? c : "".concat(c);
    }, u = function(c, h, g) {
      return typeof h == "symbol" && (h = h.description ? "[".concat(h.description, "]") : ""), Object.defineProperty(c, "name", { configurable: !0, value: g ? "".concat(g, " ", h) : h });
    }, f = function(c, h) {
      if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(c, h);
    }, y = function(c, h, g, p) {
      function b(w) {
        return w instanceof g ? w : new g(function(I) {
          I(w);
        });
      }
      return new (g || (g = Promise))(function(w, I) {
        function E(B) {
          try {
            N(p.next(B));
          } catch (K) {
            I(K);
          }
        }
        function rt(B) {
          try {
            N(p.throw(B));
          } catch (K) {
            I(K);
          }
        }
        function N(B) {
          B.done ? w(B.value) : b(B.value).then(E, rt);
        }
        N((p = p.apply(c, h || [])).next());
      });
    }, d = function(c, h) {
      var g = { label: 0, sent: function() {
        if (w[0] & 1)
          throw w[1];
        return w[1];
      }, trys: [], ops: [] }, p, b, w, I;
      return I = { next: E(0), throw: E(1), return: E(2) }, typeof Symbol == "function" && (I[Symbol.iterator] = function() {
        return this;
      }), I;
      function E(N) {
        return function(B) {
          return rt([N, B]);
        };
      }
      function rt(N) {
        if (p)
          throw new TypeError("Generator is already executing.");
        for (; I && (I = 0, N[0] && (g = 0)), g; )
          try {
            if (p = 1, b && (w = N[0] & 2 ? b.return : N[0] ? b.throw || ((w = b.return) && w.call(b), 0) : b.next) && !(w = w.call(b, N[1])).done)
              return w;
            switch (b = 0, w && (N = [N[0] & 2, w.value]), N[0]) {
              case 0:
              case 1:
                w = N;
                break;
              case 4:
                return g.label++, { value: N[1], done: !1 };
              case 5:
                g.label++, b = N[1], N = [0];
                continue;
              case 7:
                N = g.ops.pop(), g.trys.pop();
                continue;
              default:
                if (w = g.trys, !(w = w.length > 0 && w[w.length - 1]) && (N[0] === 6 || N[0] === 2)) {
                  g = 0;
                  continue;
                }
                if (N[0] === 3 && (!w || N[1] > w[0] && N[1] < w[3])) {
                  g.label = N[1];
                  break;
                }
                if (N[0] === 6 && g.label < w[1]) {
                  g.label = w[1], w = N;
                  break;
                }
                if (w && g.label < w[2]) {
                  g.label = w[2], g.ops.push(N);
                  break;
                }
                w[2] && g.ops.pop(), g.trys.pop();
                continue;
            }
            N = h.call(c, g);
          } catch (B) {
            N = [6, B], b = 0;
          } finally {
            p = w = 0;
          }
        if (N[0] & 5)
          throw N[1];
        return { value: N[0] ? N[1] : void 0, done: !0 };
      }
    }, m = function(c, h) {
      for (var g in c)
        g !== "default" && !Object.prototype.hasOwnProperty.call(h, g) && ct(h, c, g);
    }, ct = Object.create ? function(c, h, g, p) {
      p === void 0 && (p = g);
      var b = Object.getOwnPropertyDescriptor(h, g);
      (!b || ("get" in b ? !h.__esModule : b.writable || b.configurable)) && (b = { enumerable: !0, get: function() {
        return h[g];
      } }), Object.defineProperty(c, p, b);
    } : function(c, h, g, p) {
      p === void 0 && (p = g), c[p] = h[g];
    }, v = function(c) {
      var h = typeof Symbol == "function" && Symbol.iterator, g = h && c[h], p = 0;
      if (g)
        return g.call(c);
      if (c && typeof c.length == "number")
        return {
          next: function() {
            return c && p >= c.length && (c = void 0), { value: c && c[p++], done: !c };
          }
        };
      throw new TypeError(h ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, M = function(c, h) {
      var g = typeof Symbol == "function" && c[Symbol.iterator];
      if (!g)
        return c;
      var p = g.call(c), b, w = [], I;
      try {
        for (; (h === void 0 || h-- > 0) && !(b = p.next()).done; )
          w.push(b.value);
      } catch (E) {
        I = { error: E };
      } finally {
        try {
          b && !b.done && (g = p.return) && g.call(p);
        } finally {
          if (I)
            throw I.error;
        }
      }
      return w;
    }, k = function() {
      for (var c = [], h = 0; h < arguments.length; h++)
        c = c.concat(M(arguments[h]));
      return c;
    }, S = function() {
      for (var c = 0, h = 0, g = arguments.length; h < g; h++)
        c += arguments[h].length;
      for (var p = Array(c), b = 0, h = 0; h < g; h++)
        for (var w = arguments[h], I = 0, E = w.length; I < E; I++, b++)
          p[b] = w[I];
      return p;
    }, A = function(c, h, g) {
      if (g || arguments.length === 2)
        for (var p = 0, b = h.length, w; p < b; p++)
          (w || !(p in h)) && (w || (w = Array.prototype.slice.call(h, 0, p)), w[p] = h[p]);
      return c.concat(w || Array.prototype.slice.call(h));
    }, C = function(c) {
      return this instanceof C ? (this.v = c, this) : new C(c);
    }, V = function(c, h, g) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var p = g.apply(c, h || []), b, w = [];
      return b = {}, I("next"), I("throw"), I("return"), b[Symbol.asyncIterator] = function() {
        return this;
      }, b;
      function I(U) {
        p[U] && (b[U] = function(mt) {
          return new Promise(function(R, H) {
            w.push([U, mt, R, H]) > 1 || E(U, mt);
          });
        });
      }
      function E(U, mt) {
        try {
          rt(p[U](mt));
        } catch (R) {
          K(w[0][3], R);
        }
      }
      function rt(U) {
        U.value instanceof C ? Promise.resolve(U.value.v).then(N, B) : K(w[0][2], U);
      }
      function N(U) {
        E("next", U);
      }
      function B(U) {
        E("throw", U);
      }
      function K(U, mt) {
        U(mt), w.shift(), w.length && E(w[0][0], w[0][1]);
      }
    }, Y = function(c) {
      var h, g;
      return h = {}, p("next"), p("throw", function(b) {
        throw b;
      }), p("return"), h[Symbol.iterator] = function() {
        return this;
      }, h;
      function p(b, w) {
        h[b] = c[b] ? function(I) {
          return (g = !g) ? { value: C(c[b](I)), done: !1 } : w ? w(I) : I;
        } : w;
      }
    }, _ = function(c) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var h = c[Symbol.asyncIterator], g;
      return h ? h.call(c) : (c = typeof v == "function" ? v(c) : c[Symbol.iterator](), g = {}, p("next"), p("throw"), p("return"), g[Symbol.asyncIterator] = function() {
        return this;
      }, g);
      function p(w) {
        g[w] = c[w] && function(I) {
          return new Promise(function(E, rt) {
            I = c[w](I), b(E, rt, I.done, I.value);
          });
        };
      }
      function b(w, I, E, rt) {
        Promise.resolve(rt).then(function(N) {
          w({ value: N, done: E });
        }, I);
      }
    }, tt = function(c, h) {
      return Object.defineProperty ? Object.defineProperty(c, "raw", { value: h }) : c.raw = h, c;
    };
    var q = Object.create ? function(c, h) {
      Object.defineProperty(c, "default", { enumerable: !0, value: h });
    } : function(c, h) {
      c.default = h;
    };
    et = function(c) {
      if (c && c.__esModule)
        return c;
      var h = {};
      if (c != null)
        for (var g in c)
          g !== "default" && Object.prototype.hasOwnProperty.call(c, g) && ct(h, c, g);
      return q(h, c), h;
    }, ut = function(c) {
      return c && c.__esModule ? c : { default: c };
    }, xt = function(c, h, g, p) {
      if (g === "a" && !p)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof h == "function" ? c !== h || !p : !h.has(c))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return g === "m" ? p : g === "a" ? p.call(c) : p ? p.value : h.get(c);
    }, St = function(c, h, g, p, b) {
      if (p === "m")
        throw new TypeError("Private method is not writable");
      if (p === "a" && !b)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof h == "function" ? c !== h || !b : !h.has(c))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return p === "a" ? b.call(c, g) : b ? b.value = g : h.set(c, g), g;
    }, At = function(c, h) {
      if (h === null || typeof h != "object" && typeof h != "function")
        throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof c == "function" ? h === c : c.has(h);
    }, T("__extends", t), T("__assign", r), T("__rest", n), T("__decorate", i), T("__param", a), T("__esDecorate", o), T("__runInitializers", s), T("__propKey", l), T("__setFunctionName", u), T("__metadata", f), T("__awaiter", y), T("__generator", d), T("__exportStar", m), T("__createBinding", ct), T("__values", v), T("__read", M), T("__spread", k), T("__spreadArrays", S), T("__spreadArray", A), T("__await", C), T("__asyncGenerator", V), T("__asyncDelegator", Y), T("__asyncValues", _), T("__makeTemplateObject", tt), T("__importStar", et), T("__importDefault", ut), T("__classPrivateFieldGet", xt), T("__classPrivateFieldSet", St), T("__classPrivateFieldIn", At);
  });
})(qe);
var lt = function(e) {
  return e !== null && typeof e != "function" && isFinite(e.length);
}, mr = function(e, t) {
  return lt(e) ? e.indexOf(t) > -1 : !1;
}, Wa = function(e, t) {
  if (!lt(e))
    return e;
  for (var r = [], n = 0; n < e.length; n++) {
    var i = e[n];
    t(i, n) && r.push(i);
  }
  return r;
}, ld = function(e, t) {
  return t === void 0 && (t = []), Wa(e, function(r) {
    return !mr(t, r);
  });
}, ud = {}.toString, Nt = function(e, t) {
  return ud.call(e) === "[object " + t + "]";
};
const dt = function(e) {
  return Nt(e, "Function");
};
var Ut = function(e) {
  return e == null;
};
const X = function(e) {
  return Array.isArray ? Array.isArray(e) : Nt(e, "Array");
}, Tr = function(e) {
  var t = typeof e;
  return e !== null && t === "object" || t === "function";
};
function pe(e, t) {
  if (!!e) {
    var r;
    if (X(e))
      for (var n = 0, i = e.length; n < i && (r = t(e[n], n), r !== !1); n++)
        ;
    else if (Tr(e)) {
      for (var a in e)
        if (e.hasOwnProperty(a) && (r = t(e[a], a), r === !1))
          break;
    }
  }
}
var Pa = Object.keys ? function(e) {
  return Object.keys(e);
} : function(e) {
  var t = [];
  return pe(e, function(r, n) {
    dt(e) && n === "prototype" || t.push(n);
  }), t;
};
function Ba(e, t) {
  var r = Pa(t), n = r.length;
  if (Ut(e))
    return !n;
  for (var i = 0; i < n; i += 1) {
    var a = r[i];
    if (t[a] !== e[a] || !(a in e))
      return !1;
  }
  return !0;
}
var gr = function(e) {
  return typeof e == "object" && e !== null;
}, ye = function(e) {
  if (!gr(e) || !Nt(e, "Object"))
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
};
function cd(e, t) {
  if (!X(e))
    return null;
  var r;
  if (dt(t) && (r = t), ye(t) && (r = function(i) {
    return Ba(i, t);
  }), r) {
    for (var n = 0; n < e.length; n += 1)
      if (r(e[n]))
        return e[n];
  }
  return null;
}
function fd(e, t, r) {
  r === void 0 && (r = 0);
  for (var n = r; n < e.length; n++)
    if (t(e[n], n))
      return n;
  return -1;
}
var hd = function(e, t) {
  for (var r = null, n = 0; n < e.length; n++) {
    var i = e[n], a = i[t];
    if (!Ut(a)) {
      X(a) ? r = a[0] : r = a;
      break;
    }
  }
  return r;
}, dd = function(e) {
  if (!X(e))
    return [];
  for (var t = [], r = 0; r < e.length; r++)
    t = t.concat(e[r]);
  return t;
}, Va = function(e, t) {
  if (t === void 0 && (t = []), !X(e))
    t.push(e);
  else
    for (var r = 0; r < e.length; r += 1)
      Va(e[r], t);
  return t;
};
const Ga = function(e) {
  if (!!X(e))
    return e.reduce(function(t, r) {
      return Math.max(t, r);
    }, e[0]);
}, Ya = function(e) {
  if (!!X(e))
    return e.reduce(function(t, r) {
      return Math.min(t, r);
    }, e[0]);
};
var md = function(e) {
  var t = e.filter(function(o) {
    return !isNaN(o);
  });
  if (!t.length)
    return {
      min: 0,
      max: 0
    };
  if (X(e[0])) {
    for (var r = [], n = 0; n < e.length; n++)
      r = r.concat(e[n]);
    t = r;
  }
  var i = Ga(t), a = Ya(t);
  return {
    min: a,
    max: i
  };
}, Ua = Array.prototype, gd = Ua.splice, pd = Ua.indexOf, yd = function(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  for (var n = 0; n < t.length; n++)
    for (var i = t[n], a = -1; (a = pd.call(e, i)) > -1; )
      gd.call(e, a, 1);
  return e;
}, vd = Array.prototype.splice, Ha = function(t, r) {
  if (!lt(t))
    return [];
  for (var n = t ? r.length : 0, i = n - 1; n--; ) {
    var a = void 0, o = r[n];
    (n === i || o !== a) && (a = o, vd.call(t, o, 1));
  }
  return t;
}, Ja = function(e, t, r) {
  if (!X(e) && !ye(e))
    return e;
  var n = r;
  return pe(e, function(i, a) {
    n = t(n, i, a);
  }), n;
}, bd = function(e, t) {
  var r = [];
  if (!lt(e))
    return r;
  for (var n = -1, i = [], a = e.length; ++n < a; ) {
    var o = e[n];
    t(o, n, e) && (r.push(o), i.push(n));
  }
  return Ha(e, i), r;
};
const jt = function(e) {
  return Nt(e, "String");
};
function wd(e, t) {
  var r;
  if (dt(t))
    r = function(i, a) {
      return t(i) - t(a);
    };
  else {
    var n = [];
    jt(t) ? n.push(t) : X(t) && (n = t), r = function(i, a) {
      for (var o = 0; o < n.length; o += 1) {
        var s = n[o];
        if (i[s] > a[s])
          return 1;
        if (i[s] < a[s])
          return -1;
      }
      return 0;
    };
  }
  return e.sort(r), e;
}
function Xa(e, t) {
  t === void 0 && (t = /* @__PURE__ */ new Map());
  var r = [];
  if (Array.isArray(e))
    for (var n = 0, i = e.length; n < i; n++) {
      var a = e[n];
      t.has(a) || (r.push(a), t.set(a, !0));
    }
  return r;
}
var xd = function() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return Xa([].concat.apply([], e));
};
const _a = function(e, t) {
  for (var r = [], n = {}, i = 0; i < e.length; i++) {
    var a = e[i], o = a[t];
    if (!Ut(o)) {
      X(o) || (o = [o]);
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        n[l] || (r.push(l), n[l] = !0);
      }
    }
  }
  return r;
};
function Sd(e) {
  if (lt(e))
    return e[0];
}
function Ad(e) {
  if (lt(e)) {
    var t = e;
    return t[t.length - 1];
  }
}
function Td(e, t) {
  return X(e) || jt(e) ? e[0] === t : !1;
}
function Od(e, t) {
  return X(e) || jt(e) ? e[e.length - 1] === t : !1;
}
var Md = function(e, t) {
  for (var r = 0; r < e.length; r++)
    if (!t(e[r], r))
      return !1;
  return !0;
}, Id = function(e, t) {
  for (var r = 0; r < e.length; r++)
    if (t(e[r], r))
      return !0;
  return !1;
}, kd = Object.prototype.hasOwnProperty;
function qa(e, t) {
  if (!t || !X(e))
    return {};
  for (var r = {}, n = dt(t) ? t : function(s) {
    return s[t];
  }, i, a = 0; a < e.length; a++) {
    var o = e[a];
    i = n(o), kd.call(r, i) ? r[i].push(o) : r[i] = [o];
  }
  return r;
}
function Qa(e, t) {
  if (!t)
    return {
      0: e
    };
  if (!dt(t)) {
    var r = X(t) ? t : t.replace(/\s+/g, "").split("*");
    t = function(n) {
      for (var i = "_", a = 0, o = r.length; a < o; a++)
        i += n[r[a]] && n[r[a]].toString();
      return i;
    };
  }
  return qa(e, t);
}
const Nd = function(e, t) {
  if (!t)
    return [e];
  var r = Qa(e, t), n = [];
  for (var i in r)
    n.push(r[i]);
  return n;
};
function Cd(e, t) {
  return e["_wrap_" + t];
}
function Fd(e, t) {
  if (e["_wrap_" + t])
    return e["_wrap_" + t];
  var r = function(n) {
    e[t](n);
  };
  return e["_wrap_" + t] = r, r;
}
var ci = {};
function Ed(e) {
  var t = ci[e];
  if (!t) {
    for (var r = e.toString(16), n = r.length; n < 6; n++)
      r = "0" + r;
    t = "#" + r, ci[e] = t;
  }
  return t;
}
function Dd(e) {
  var t = 0, r = 0, n = 0, i = 0;
  return X(e) ? e.length === 1 ? t = r = n = i = e[0] : e.length === 2 ? (t = n = e[0], r = i = e[1]) : e.length === 3 ? (t = e[0], r = i = e[1], n = e[2]) : (t = e[0], r = e[1], n = e[2], i = e[3]) : t = r = n = i = e, {
    r1: t,
    r2: r,
    r3: n,
    r4: i
  };
}
var Ka = function(e, t, r) {
  return e < t ? t : e > r ? r : e;
}, jd = function(e, t) {
  var r = t.toString(), n = r.indexOf(".");
  if (n === -1)
    return Math.round(e);
  var i = r.substr(n + 1).length;
  return i > 20 && (i = 20), parseFloat(e.toFixed(i));
}, Pt = function(e) {
  return Nt(e, "Number");
}, Ld = function(e) {
  return Pt(e) && e % 1 !== 0;
}, Rd = function(e) {
  return Pt(e) && e % 2 === 0;
}, zd = Number.isInteger ? Number.isInteger : function(e) {
  return Pt(e) && e % 1 === 0;
}, Zd = function(e) {
  return Pt(e) && e < 0;
}, Wd = 1e-5;
function Pd(e, t, r) {
  return r === void 0 && (r = Wd), Math.abs(e - t) < r;
}
var Bd = function(e) {
  return Pt(e) && e % 2 !== 0;
}, Vd = function(e) {
  return Pt(e) && e > 0;
};
const Gd = function(e, t) {
  if (!!X(e)) {
    for (var r, n = -1 / 0, i = 0; i < e.length; i++) {
      var a = e[i], o = dt(t) ? t(a) : a[t];
      o > n && (r = a, n = o);
    }
    return r;
  }
}, Yd = function(e, t) {
  if (!!X(e)) {
    for (var r, n = 1 / 0, i = 0; i < e.length; i++) {
      var a = e[i], o = dt(t) ? t(a) : a[t];
      o < n && (r = a, n = o);
    }
    return r;
  }
};
var Ud = function(e, t) {
  return (e % t + t) % t;
}, Hd = 180 / Math.PI, Jd = function(e) {
  return Hd * e;
};
const Xd = parseInt;
var _d = Math.PI / 180, qd = function(e) {
  return _d * e;
};
const fi = function(e, t) {
  return e.hasOwnProperty(t);
};
var dn = Object.values ? function(e) {
  return Object.values(e);
} : function(e) {
  var t = [];
  return pe(e, function(r, n) {
    dt(e) && n === "prototype" || t.push(r);
  }), t;
};
const Qd = function(e, t) {
  return mr(dn(e), t);
}, Oe = function(e) {
  return Ut(e) ? "" : e.toString();
};
var Kd = function(e) {
  return Oe(e).toLowerCase();
}, $d = function(e) {
  var t = Oe(e);
  return t.charAt(0).toLowerCase() + t.substring(1);
};
function t0(e, t) {
  return !e || !t ? e : e.replace(/\\?\{([^{}]+)\}/g, function(r, n) {
    return r.charAt(0) === "\\" ? r.slice(1) : t[n] === void 0 ? "" : t[n];
  });
}
var e0 = function(e) {
  return Oe(e).toUpperCase();
}, r0 = function(e) {
  var t = Oe(e);
  return t.charAt(0).toUpperCase() + t.substring(1);
}, n0 = {}.toString, $a = function(e) {
  return n0.call(e).replace(/^\[object /, "").replace(/]$/, "");
}, i0 = function(e) {
  return Nt(e, "Arguments");
}, a0 = function(e) {
  return Nt(e, "Boolean");
}, o0 = function(e) {
  return Nt(e, "Date");
}, s0 = function(e) {
  return Nt(e, "Error");
};
function l0(e) {
  return Pt(e) && isFinite(e);
}
var u0 = function(e) {
  return e === null;
}, c0 = Object.prototype, to = function(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || c0;
  return e === r;
}, f0 = function(e) {
  return Nt(e, "RegExp");
}, h0 = function(e) {
  return e === void 0;
}, d0 = function(e) {
  return e instanceof Element || e instanceof HTMLDocument;
};
function m0(e) {
  var t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(r) {
    return setTimeout(r, 16);
  };
  return t(e);
}
function g0(e) {
  var t = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame || clearTimeout;
  t(e);
}
function zr(e, t) {
  for (var r in t)
    t.hasOwnProperty(r) && r !== "constructor" && t[r] !== void 0 && (e[r] = t[r]);
}
function he(e, t, r, n) {
  return t && zr(e, t), r && zr(e, r), n && zr(e, n), e;
}
var p0 = function() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], n = 1; n < e.length; n++) {
    var i = e[n];
    dt(i) && (i = i.prototype), he(r.prototype, i);
  }
}, _r = function(e) {
  if (typeof e != "object" || e === null)
    return e;
  var t;
  if (X(e)) {
    t = [];
    for (var r = 0, n = e.length; r < n; r++)
      typeof e[r] == "object" && e[r] != null ? t[r] = _r(e[r]) : t[r] = e[r];
  } else {
    t = {};
    for (var i in e)
      typeof e[i] == "object" && e[i] != null ? t[i] = _r(e[i]) : t[i] = e[i];
  }
  return t;
};
function y0(e, t, r) {
  var n;
  return function() {
    var i = this, a = arguments, o = function() {
      n = null, r || e.apply(i, a);
    }, s = r && !n;
    clearTimeout(n), n = setTimeout(o, t), s && e.apply(i, a);
  };
}
const eo = function(e, t) {
  if (!dt(e))
    throw new TypeError("Expected a function");
  var r = function() {
    for (var n = [], i = 0; i < arguments.length; i++)
      n[i] = arguments[i];
    var a = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(a))
      return o.get(a);
    var s = e.apply(this, n);
    return o.set(a, s), s;
  };
  return r.cache = /* @__PURE__ */ new Map(), r;
};
var v0 = 5;
function ro(e, t, r, n) {
  r = r || 0, n = n || v0;
  for (var i in t)
    if (t.hasOwnProperty(i)) {
      var a = t[i];
      a !== null && ye(a) ? (ye(e[i]) || (e[i] = {}), r < n ? ro(e[i], a, r + 1, n) : e[i] = t[i]) : X(a) ? (e[i] = [], e[i] = e[i].concat(a)) : a !== void 0 && (e[i] = a);
    }
}
var b0 = function(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  for (var n = 0; n < t.length; n += 1)
    ro(e, t[n]);
  return e;
}, w0 = function(e, t, r, n) {
  dt(t) || (r = t, t = e, e = function() {
  });
  var i = Object.create ? function(o, s) {
    return Object.create(o, {
      constructor: {
        value: s
      }
    });
  } : function(o, s) {
    function l() {
    }
    l.prototype = o;
    var u = new l();
    return u.constructor = s, u;
  }, a = i(t.prototype, e);
  return e.prototype = he(a, e.prototype), e.superclass = i(t.prototype, t), he(a, r), he(e, n), e;
}, x0 = function(e, t) {
  if (!lt(e))
    return -1;
  var r = Array.prototype.indexOf;
  if (r)
    return r.call(e, t);
  for (var n = -1, i = 0; i < e.length; i++)
    if (e[i] === t) {
      n = i;
      break;
    }
  return n;
}, S0 = Object.prototype.hasOwnProperty;
function A0(e) {
  if (Ut(e))
    return !0;
  if (lt(e))
    return !e.length;
  var t = $a(e);
  if (t === "Map" || t === "Set")
    return !e.size;
  if (to(e))
    return !Object.keys(e).length;
  for (var r in e)
    if (S0.call(e, r))
      return !1;
  return !0;
}
var pr = function(e, t) {
  if (e === t)
    return !0;
  if (!e || !t || jt(e) || jt(t))
    return !1;
  if (lt(e) || lt(t)) {
    if (e.length !== t.length)
      return !1;
    for (var r = !0, n = 0; n < e.length && (r = pr(e[n], t[n]), !!r); n++)
      ;
    return r;
  }
  if (gr(e) || gr(t)) {
    var i = Object.keys(e), a = Object.keys(t);
    if (i.length !== a.length)
      return !1;
    for (var r = !0, n = 0; n < i.length && (r = pr(e[i[n]], t[i[n]]), !!r); n++)
      ;
    return r;
  }
  return !1;
};
const T0 = function(e, t, r) {
  return dt(r) ? !!r(e, t) : pr(e, t);
};
var O0 = function(e, t) {
  if (!lt(e))
    return e;
  for (var r = [], n = 0; n < e.length; n++) {
    var i = e[n];
    r.push(t(i, n));
  }
  return r;
}, M0 = function(e) {
  return e;
};
const I0 = function(e, t) {
  t === void 0 && (t = M0);
  var r = {};
  return Tr(e) && !Ut(e) && Object.keys(e).forEach(function(n) {
    r[n] = t(e[n], n);
  }), r;
}, k0 = function(e, t, r) {
  for (var n = 0, i = jt(t) ? t.split(".") : t; e && n < i.length; )
    e = e[i[n++]];
  return e === void 0 || n < i.length ? r : e;
}, N0 = function(e, t, r) {
  var n = e, i = jt(t) ? t.split(".") : t;
  return i.forEach(function(a, o) {
    o < i.length - 1 ? (Tr(n[a]) || (n[a] = Pt(i[o + 1]) ? [] : {}), n = n[a]) : n[a] = r;
  }), e;
};
var C0 = Object.prototype.hasOwnProperty;
const F0 = function(e, t) {
  if (e === null || !ye(e))
    return {};
  var r = {};
  return pe(t, function(n) {
    C0.call(e, n) && (r[n] = e[n]);
  }), r;
}, E0 = function(e, t) {
  return Ja(e, function(r, n, i) {
    return t.includes(i) || (r[i] = n), r;
  }, {});
}, D0 = function(e, t, r) {
  var n, i, a, o, s = 0;
  r || (r = {});
  var l = function() {
    s = r.leading === !1 ? 0 : Date.now(), n = null, o = e.apply(i, a), n || (i = a = null);
  }, u = function() {
    var f = Date.now();
    !s && r.leading === !1 && (s = f);
    var y = t - (f - s);
    return i = this, a = arguments, y <= 0 || y > t ? (n && (clearTimeout(n), n = null), s = f, o = e.apply(i, a), n || (i = a = null)) : !n && r.trailing !== !1 && (n = setTimeout(l, y)), o;
  };
  return u.cancel = function() {
    clearTimeout(n), s = 0, n = i = a = null;
  }, u;
}, j0 = function(e) {
  return lt(e) ? Array.prototype.slice.call(e) : [];
};
var rr = {};
const L0 = function(e) {
  return e = e || "g", rr[e] ? rr[e] += 1 : rr[e] = 1, e + rr[e];
}, R0 = function() {
}, z0 = function(e) {
  return e;
};
function qr(e) {
  return Ut(e) ? 0 : lt(e) ? e.length : Object.keys(e).length;
}
var nr;
const je = eo(function(e, t) {
  t === void 0 && (t = {});
  var r = t.fontSize, n = t.fontFamily, i = t.fontWeight, a = t.fontStyle, o = t.fontVariant;
  return nr || (nr = document.createElement("canvas").getContext("2d")), nr.font = [a, o, i, r + "px", n].join(" "), nr.measureText(jt(e) ? e : "").width;
}, function(e, t) {
  return t === void 0 && (t = {}), qe.exports.__spreadArrays([e], dn(t)).join("");
}), Z0 = function(e, t, r, n) {
  n === void 0 && (n = "...");
  var i = 16, a = je(n, r), o = jt(e) ? e : Oe(e), s = t, l = [], u, f;
  if (je(e, r) <= t)
    return e;
  for (; u = o.substr(0, i), f = je(u, r), !(f + a > s && f > s); )
    if (l.push(u), s -= f, o = o.substr(i), !o)
      return l.join("");
  for (; u = o.substr(0, 1), f = je(u, r), !(f + a > s); )
    if (l.push(u), s -= f, o = o.substr(1), !o)
      return l.join("");
  return "" + l.join("") + n;
};
var W0 = function() {
  function e() {
    this.map = {};
  }
  return e.prototype.has = function(t) {
    return this.map[t] !== void 0;
  }, e.prototype.get = function(t, r) {
    var n = this.map[t];
    return n === void 0 ? r : n;
  }, e.prototype.set = function(t, r) {
    this.map[t] = r;
  }, e.prototype.clear = function() {
    this.map = {};
  }, e.prototype.delete = function(t) {
    delete this.map[t];
  }, e.prototype.size = function() {
    return Object.keys(this.map).length;
  }, e;
}();
const P0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  contains: mr,
  includes: mr,
  difference: ld,
  find: cd,
  findIndex: fd,
  firstValue: hd,
  flatten: dd,
  flattenDeep: Va,
  getRange: md,
  pull: yd,
  pullAt: Ha,
  reduce: Ja,
  remove: bd,
  sortBy: wd,
  union: xd,
  uniq: Xa,
  valuesOfKey: _a,
  head: Sd,
  last: Ad,
  startsWith: Td,
  endsWith: Od,
  filter: Wa,
  every: Md,
  some: Id,
  group: Nd,
  groupBy: qa,
  groupToMap: Qa,
  getWrapBehavior: Cd,
  wrapBehavior: Fd,
  number2color: Ed,
  parseRadius: Dd,
  clamp: Ka,
  fixedBase: jd,
  isDecimal: Ld,
  isEven: Rd,
  isInteger: zd,
  isNegative: Zd,
  isNumberEqual: Pd,
  isOdd: Bd,
  isPositive: Vd,
  max: Ga,
  maxBy: Gd,
  min: Ya,
  minBy: Yd,
  mod: Ud,
  toDegree: Jd,
  toInteger: Xd,
  toRadian: qd,
  forIn: pe,
  has: fi,
  hasKey: fi,
  hasValue: Qd,
  keys: Pa,
  isMatch: Ba,
  values: dn,
  lowerCase: Kd,
  lowerFirst: $d,
  substitute: t0,
  upperCase: e0,
  upperFirst: r0,
  getType: $a,
  isArguments: i0,
  isArray: X,
  isArrayLike: lt,
  isBoolean: a0,
  isDate: o0,
  isError: s0,
  isFunction: dt,
  isFinite: l0,
  isNil: Ut,
  isNull: u0,
  isNumber: Pt,
  isObject: Tr,
  isObjectLike: gr,
  isPlainObject: ye,
  isPrototype: to,
  isRegExp: f0,
  isString: jt,
  isType: Nt,
  isUndefined: h0,
  isElement: d0,
  requestAnimationFrame: m0,
  clearAnimationFrame: g0,
  augment: p0,
  clone: _r,
  debounce: y0,
  memoize: eo,
  deepMix: b0,
  each: pe,
  extend: w0,
  indexOf: x0,
  isEmpty: A0,
  isEqual: pr,
  isEqualWith: T0,
  map: O0,
  mapValues: I0,
  mix: he,
  assign: he,
  get: k0,
  set: N0,
  pick: F0,
  omit: E0,
  throttle: D0,
  toArray: j0,
  toString: Oe,
  uniqueId: L0,
  noop: R0,
  identity: z0,
  size: qr,
  measureTextWidth: je,
  getEllipsisText: Z0,
  Cache: W0
}, Symbol.toStringTag, { value: "Module" })), mn = /* @__PURE__ */ sd(P0);
var no = {}, Or = {};
Object.defineProperty(Or, "__esModule", { value: !0 });
var B0 = mn, V0 = function() {
  function e(t, r) {
    this.context = t, this.cfg = r, t.addAction(this);
  }
  return e.prototype.applyCfg = function(t) {
    (0, B0.assign)(this, t);
  }, e.prototype.init = function() {
    this.applyCfg(this.cfg);
  }, e.prototype.destroy = function() {
    this.context.removeAction(this), this.context = null;
  }, e;
}();
Or.default = V0;
var vt = {}, ir = {}, hi;
function G0() {
  if (hi)
    return ir;
  hi = 1, Object.defineProperty(ir, "__esModule", { value: !0 });
  var e = qe.exports, t = e.__importDefault(Or), r = function(n) {
    e.__extends(i, n);
    function i() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return i.prototype.execute = function() {
      this.callback && this.callback(this.context);
    }, i.prototype.destroy = function() {
      n.prototype.destroy.call(this), this.callback = null;
    }, i;
  }(t.default);
  return ir.default = r, ir;
}
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.createCallbackAction = vt.unregisterAction = vt.registerAction = vt.getActionClass = vt.createAction = void 0;
var Y0 = qe.exports, U0 = Y0.__importDefault(G0()), H0 = mn, Mr = {};
function J0(e, t) {
  var r = Mr[e], n = null;
  if (r) {
    var i = r.ActionClass, a = r.cfg;
    n = new i(t, a), n.name = e, n.init();
  }
  return n;
}
vt.createAction = J0;
function X0(e) {
  var t = Mr[e];
  return (0, H0.get)(t, "ActionClass");
}
vt.getActionClass = X0;
function _0(e, t, r) {
  Mr[e] = {
    ActionClass: t,
    cfg: r
  };
}
vt.registerAction = _0;
function q0(e) {
  delete Mr[e];
}
vt.unregisterAction = q0;
function Q0(e, t) {
  var r = new U0.default(t);
  return r.callback = e, r.name = "callback", r;
}
vt.createCallbackAction = Q0;
(function(e) {
  var t = dr && dr.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getActionClass = e.registerAction = e.createAction = e.Action = void 0;
  var r = Or;
  Object.defineProperty(e, "Action", { enumerable: !0, get: function() {
    return t(r).default;
  } });
  var n = vt;
  Object.defineProperty(e, "createAction", { enumerable: !0, get: function() {
    return n.createAction;
  } }), Object.defineProperty(e, "registerAction", { enumerable: !0, get: function() {
    return n.registerAction;
  } }), Object.defineProperty(e, "getActionClass", { enumerable: !0, get: function() {
    return n.getActionClass;
  } });
})(no);
Object.defineProperty(Za, "__esModule", { value: !0 });
var K0 = qe.exports, ar = mn, $0 = no;
function tm(e) {
  var t = e.gEvent.originalEvent;
  return t.deltaY > 0;
}
var em = 1, rm = function(e) {
  K0.__extends(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.scroll = function(r) {
    var n = this.context, i = n.view, a = n.event;
    if (!!i.getOptions().scrollbar) {
      var o = (r == null ? void 0 : r.wheelDelta) || em, s = i.getController("scrollbar"), l = i.getXScale(), u = i.getOptions().data, f = (0, ar.size)((0, ar.valuesOfKey)(u, l.field)), y = (0, ar.size)(l.values), d = s.getValue(), m = Math.floor((f - y) * d), v = m + (tm(a) ? o : -o), M = o / (f - y) / 1e4, k = (0, ar.clamp)(v / (f - y) + M, 0, 1);
      s.setValue(k);
    }
  }, t;
}($0.Action), nm = Za.default = rm;
let Et = [];
function im(e) {
  return e.gEvent.originalEvent.deltaY > 0;
}
class am extends nm {
  scroll(t) {
    const { view: r, event: n } = this.context;
    if (!r.getOptions().scrollbar)
      return;
    const i = (t == null ? void 0 : t.wheelDelta) || 1, a = r.getController("scrollbar"), o = r.getXScale(), s = r.getOptions().data, l = qr(_a(s, o.field)), u = qr(o.values), f = a.getValue(), d = Math.floor((l - u) * f) + (im(n) ? i : -i), m = i / (l - u) / 1e4, v = Ka(d / (l - u) + m, 0, 1);
    a.setValue(v), r === Et[1] ? Et[0].getController("scrollbar").setValue(v) : Et[1].getController("scrollbar").setValue(v);
  }
}
class om {
  constructor(t) {
    nt(this, "chart");
    nt(this, "data");
    nt(this, "option");
    this.data = t.data, this.option = t, this.changeThemeOption(this.option);
  }
  get config() {
    var t, r;
    return this.option = readThemeOption((r = ma[(t = this.option.theme) != null ? t : ""]) != null ? r : {}, this.option);
  }
  changeThemeOption(t) {
    this.option = te(t);
  }
  initChart(t) {
    this.chart = new ve(this.handlerChartOption(t)), this.changeThemeOption(this.option), this.configParams(), this.render();
  }
  configParams() {
    this.changeThemeOption(this.option), this.setData(), this.setInterval(), this.setAxis(), this.setLegend(), this.option.transpose === "mirror" || this.option.transpose === "horizontalMirror" ? this.setMirrorTooltip() : (this.setTooltip(), this.setAnnotation()), this.chart.animate(!1), this.interaction();
  }
  interaction(t = this.chart) {
    const r = this.option.interaction;
    for (const n in r)
      if (Object.prototype.hasOwnProperty.call(r, n)) {
        const i = r[n];
        i === !1 ? t == null || t.removeInteraction(n) : t.interaction(n, i);
      }
  }
  setData() {
    var t;
    (t = this.chart) == null || t.data(this.data);
  }
  setScrollbar(t, r) {
    let n = {};
    const i = {
      type: "horizontal",
      style: {
        thumbColor: "rgba(153,153,153,0)",
        thumbHighlightColor: "rgba(153,153,153,0)"
      }
    };
    r === void 0 ? n = i : n = {
      ...i,
      ...r
    }, this.option.transpose === "mirror" || this.option.transpose === "horizontalMirror" ? (go("sibing-mouse-scroll", am), po("custom-interaction", {
      start: [{ trigger: "plot:mousewheel", action: "sibing-mouse-scroll:scroll" }]
    }), t.interaction("custom-interaction")) : (t.option("scrollbar", n), t.interaction("plot-mousewheel-scroll", {
      start: [{ trigger: "plot:mousewheel", action: "mousewheel-scroll:scroll" }]
    }));
  }
  getMax() {
    const t = this.data, r = this.option.yField;
    return t.sort(function(n, i) {
      return i[r] - n[r];
    }), t[0][r];
  }
  getGroupNumber() {
    let t = 0;
    const r = this.data, n = this.option.seriesField;
    if (n === void 0)
      return this.option.data.length;
    if (this.data.length === 0)
      return 0;
    const i = this.data[0][`${n}`];
    return r.forEach((a) => {
      a[`${n}`] === i && t++;
    }), t;
  }
  setInterval() {
    var o, s, l, u, f, y, d, m, v, M, k;
    let t = 16;
    if (((o = this.option.style) == null ? void 0 : o.barWidth) !== void 0 && (t = (s = this.option.style) == null ? void 0 : s.barWidth), this.option.transpose === "mirror" || this.option.transpose === "horizontalMirror") {
      this.transposeMirror();
      return;
    }
    this.option.transpose === "horizontal" && ((l = this.chart) == null || l.coordinate().transpose().scale(1, -1));
    const r = this.chart.interval();
    r.size(t), r.position(`${this.option.xField}*${this.option.yField}`);
    const n = (f = (u = this.option.scrollbar) == null ? void 0 : u.max) != null ? f : 8;
    if (this.getGroupNumber() > n && this.setScrollbar(this.chart, (y = this.option.scrollbar) == null ? void 0 : y.cfg), this.option.seriesField)
      r.color(this.option.seriesField, this.option.color);
    else {
      let S = (d = this.option.color) != null ? d : "#1890ff";
      ht(this.option.color) && (S = (m = this.option.color[0]) != null ? m : "#1890ff"), r.color(S);
    }
    if (this.option.transpose === "horizontal") {
      r.label(`${this.option.yField}`, (A) => ({
        content: A + "\u6B21",
        style: {
          fill: "rgba(255, 255, 255, 0.7)",
          fontSize: 14
        },
        offsetX: 5
      }));
      const S = this.getMax() + 30;
      (v = this.chart) == null || v.scale(`${this.option.yField}`, {
        max: S,
        nice: !0
      });
    }
    this.option.adjust && r.adjust(this.option.adjust);
    let a = "";
    ((M = this.option.style) == null ? void 0 : M.shape) !== void 0 && (a = (k = this.option.style) == null ? void 0 : k.shape), a !== void 0 && this.setShape(r, a);
  }
  transposeMirror() {
    var f, y, d, m, v, M, k;
    let t = 16;
    ((f = this.option.style) == null ? void 0 : f.barWidth) !== void 0 && (t = (y = this.option.style) == null ? void 0 : y.barWidth), ((d = this.option.style) == null ? void 0 : d.shape) !== void 0 && ((m = this.option.style) == null || m.shape), this.defineShape();
    let r = !1, n = [10, 15, 40, 40];
    this.option.transpose === "horizontalMirror" && (r = !0, n = [0, 25, 30, 20]);
    const i = this.option.xField, a = this.option.yField, o = this.option.seriesField, s = this.option.annotation, l = this.option.color, u = this;
    (v = this.chart) == null || v.scale({
      [`${o}`]: {
        sync: !0
      }
    }), (M = this.chart) == null || M.facet("mirror", {
      fields: [`${o}`],
      transpose: r,
      showTitle: !1,
      padding: n,
      eachView(S, A) {
        var ut, xt, St, At, ct, T, P, q, c, h;
        let C = "topTriangle";
        const V = (ut = u.option.axis) == null ? void 0 : ut.yAxis.unit;
        let Y = ["-5%", "-20%"];
        (A == null ? void 0 : A.rowIndex) === 0 && (C = "mirrorTopTriangle"), (A == null ? void 0 : A.rowIndex) === 1 && (C = "mirrorBottomTriangle", Y = ["-5%", "120%"]);
        const _ = (xt = A == null ? void 0 : A.data) != null ? xt : [];
        S.interval().position(`${i}*${a}`).size(t).color(`${o}`, l).shape(C);
        const et = (At = (St = u.option.scrollbar) == null ? void 0 : St.max) != null ? At : 31;
        _.length > et && u.setScrollbar(S, (ct = u.option.scrollbar) == null ? void 0 : ct.cfg), V !== void 0 && S.annotation().text({
          content: (P = (T = V[`${A == null ? void 0 : A.rowIndex}`]) == null ? void 0 : T.content) != null ? P : "",
          position: (c = (q = V[`${A == null ? void 0 : A.rowIndex}`]) == null ? void 0 : q.position) != null ? c : Y,
          style: (h = V[`${A == null ? void 0 : A.rowIndex}`]) == null ? void 0 : h.style
        }), (A == null ? void 0 : A.rowIndex) === 0 && (s == null ? void 0 : s.dataMarker) !== void 0 && s.dataMarker.forEach((p) => {
          S.annotation().dataMarker(p);
        });
      }
    }), Et = (k = this.chart) == null ? void 0 : k.views;
  }
  setShape(t, r) {
    if (r) {
      this.setCustomHorizontalTopArrow(r);
      return;
    }
    this.defineShape(), t.shape(r);
  }
  setCustomHorizontalTopArrow(t) {
    var a;
    const r = this.data, n = this.option.xField, i = this.option.yField;
    for (let o = 0; o < r.length; o++)
      r[o][i] !== 0 && ((a = this.chart) == null || a.annotation().image({
        src: t,
        top: !1,
        start: [r[o][n], r[o][i]],
        end: [r[o][n], r[o][i]],
        animate: !0,
        offsetX: -0.7,
        offsetY: -8,
        style: {
          width: 16,
          height: 16
        }
      }));
  }
  defineShape() {
    Qt("interval", "topTriangle", {
      getPoints(n) {
        const i = n.x, a = n.y, o = n.y0, s = n.size;
        return a === 0 && o === 0 ? [
          { x: i - s / 2, y: 0 },
          { x: i - s / 2, y: 0 },
          { x: i, y: a },
          { x: i + s / 2, y: 0 },
          { x: i + s / 2, y: 0 }
        ] : [
          { x: i - s / 2, y: o },
          { x: i - s / 2, y: a - 0.04 },
          { x: i, y: a },
          { x: i + s / 2, y: a - 0.04 },
          { x: i + s / 2, y: o }
        ];
      },
      draw(n, i) {
        const a = this.parsePoints(n.points);
        return i.addShape("path", {
          attrs: {
            path: [
              ["M", a[0].x, a[0].y],
              ["L", a[1].x, a[1].y],
              ["L", a[2].x, a[2].y],
              ["L", a[3].x, a[3].y],
              ["L", a[4].x, a[4].y]
            ],
            ...n.defaultStyle,
            fill: "l(90) 0:#26324B 1:#6F80C7"
          }
        });
      }
    });
    const t = this.option.fillColor ? this.option.fillColor[0] : "#1E91F5", r = this.option.fillColor ? this.option.fillColor[1] : "#8574F3";
    Qt("interval", "mirrorTopTriangle", {
      getPoints(n) {
        const i = n.x, a = n.y, o = n.y0, s = n.size;
        return a === 0 && o === 0 ? [
          { x: i - s / 2, y: 0 },
          { x: i - s / 2, y: 0 },
          { x: i, y: a },
          { x: i + s / 2, y: 0 },
          { x: i + s / 2, y: 0 }
        ] : [
          { x: i - s / 2, y: o },
          { x: i - s / 2, y: a - 0.04 },
          { x: i, y: a },
          { x: i + s / 2, y: a - 0.04 },
          { x: i + s / 2, y: o }
        ];
      },
      draw(n, i) {
        const a = this.parsePoints(n.points);
        return i.addShape("path", {
          attrs: {
            path: [
              ["M", a[0].x, a[0].y],
              ["L", a[1].x, a[1].y],
              ["L", a[2].x, a[2].y],
              ["L", a[3].x, a[3].y],
              ["L", a[4].x, a[4].y]
            ],
            ...n.defaultStyle,
            fill: t
          }
        });
      }
    }), Qt("interval", "mirrorBottomTriangle", {
      getPoints(n) {
        const i = n.x, a = n.y, o = n.y0, s = n.size;
        return a === 0 && o === 0 ? [
          { x: i - s / 2, y: 0 },
          { x: i - s / 2, y: 0 },
          { x: i, y: a },
          { x: i + s / 2, y: 0 },
          { x: i + s / 2, y: 0 }
        ] : [
          { x: i - s / 2, y: o },
          { x: i - s / 2, y: a - 0.04 },
          { x: i, y: a },
          { x: i + s / 2, y: a - 0.04 },
          { x: i + s / 2, y: o }
        ];
      },
      draw(n, i) {
        const a = this.parsePoints(n.points);
        return i.addShape("path", {
          attrs: {
            path: [
              ["M", a[0].x, a[0].y],
              ["L", a[1].x, a[1].y],
              ["L", a[2].x, a[2].y],
              ["L", a[3].x, a[3].y],
              ["L", a[4].x, a[4].y]
            ],
            ...n.defaultStyle,
            fill: r
          }
        });
      }
    }), Qt("interval", "horizontalTopTriangle", {
      getPoints(n) {
        const i = n.x, a = n.y, o = n.y0, s = n.size;
        return [
          { x: i - s / 2, y: o },
          { x: i - s / 2, y: a - 0.01 },
          { x: i, y: a },
          { x: i + s / 2, y: a - 0.01 },
          { x: i + s / 2, y: o }
        ];
      },
      draw(n, i) {
        const a = this.parsePoints(n.points);
        return i.addShape("path", {
          attrs: {
            path: [
              ["M", a[0].x, a[0].y],
              ["L", a[1].x, a[1].y],
              ["L", a[2].x, a[2].y],
              ["L", a[3].x, a[3].y],
              ["L", a[4].x, a[4].y]
            ],
            ...n.defaultStyle
          }
        });
      }
    });
  }
  setAxis() {
    var n, i;
    if (this.option.axis === !1) {
      this.chart.axis(!1);
      return;
    }
    const t = ((n = this.option.axis) == null ? void 0 : n.xAxis) === void 0 ? {} : this.option.axis.xAxis, r = ((i = this.option.axis) == null ? void 0 : i.yAxis) === void 0 ? {} : this.option.axis.yAxis;
    this.setSingleAxis(this.option.xField, t), this.setSingleAxis(this.option.yField, r);
  }
  setSingleAxis(t, r) {
    r !== !1 ? (r.scale !== void 0 && this.setScale(t, r.scale), this.chart.axis(t, an(r)), this.configAnnotation("text", r.unit)) : this.chart.axis(t, !1);
  }
  setScale(t, r) {
    this.chart.scale(t, r != null ? r : {});
  }
  setTooltip() {
    var n, i;
    const t = this.chart;
    if (this.option.tooltip === !1) {
      t.tooltip(!1);
      return;
    }
    const r = this.option.tooltip;
    if (r === void 0) {
      t.tooltip({
        shared: !0
      });
      return;
    }
    t.tooltip({
      shared: (n = r.shared) != null ? n : !0,
      showTitle: r.title !== !1,
      customItems: r.customItems,
      domStyles: r.domStyles,
      title: (i = r.title) != null ? i : "",
      showMarkers: r.marker !== !1,
      marker: r.marker,
      itemTpl: r.itemTpl,
      showCrosshairs: Boolean(r.crosshairs),
      crosshairs: hr(r.crosshairs) ? {} : r.crosshairs
    });
  }
  setMirrorTooltip() {
    var s, l, u;
    const t = this.chart;
    if (this.option.tooltip === !1) {
      t.tooltip(!1);
      return;
    }
    const r = this.option.tooltip;
    if (r === void 0) {
      t.tooltip({
        shared: !0
      });
      return;
    }
    const n = this.option.xField, i = this.option.yField, a = this.option.seriesField, o = this.option.axis;
    (u = this.chart) == null || u.tooltip({
      shared: (s = r.shared) != null ? s : !0,
      showTitle: r.title !== !1,
      customItems: (f) => {
        const d = f[0].title, m = this.getMirrorDataByX(d), v = [];
        return m.forEach((M, k) => {
          const S = { ...f[0] };
          S.title = M[`${n}`], S.value = M[`${i}`], S.name = M[`${a}`], S.unit = o == null ? void 0 : o.yAxis.unit[k].content, v.push(S);
        }), v;
      },
      itemTpl: `
                    <li class="g2-tooltip-list-item">
                        <span class="g2-tooltip-marker"></span>
                        <span class="g2-tooltip-name">{name}</span>
                        <span class="g2-tooltip-value">{value}
                            <span class="g2-tooltip-unit">{unit}</span>
                        </span>
                    </li>`,
      domStyles: r.domStyles,
      title: (l = r.title) != null ? l : "",
      showMarkers: r.marker !== !1,
      marker: r.marker,
      crosshairs: hr(r.crosshairs) ? {} : r.crosshairs
    });
  }
  getMirrorDataByX(t) {
    var a;
    const r = this.data, n = (a = this.option.xField) != null ? a : "x", i = [];
    if (t !== void 0)
      for (const o of r)
        o[n] === t && i.push(o);
    return i;
  }
  configAnnotation(t, r) {
    if (!!r)
      if (ht(r))
        for (const n of r)
          this.chart.annotation()[t](n);
      else
        this.chart.annotation()[t](r);
  }
  setAnnotation() {
    !this.option.annotation || Object.entries(this.option.annotation).forEach(([t, r]) => {
      this.configAnnotation(t, r);
    });
  }
  setLegend() {
    const t = this.chart;
    if (!this.option.legend) {
      t.legend(!1);
      return;
    }
    t.legend(this.option.legend);
  }
  handlerChartOption(t) {
    var n, i, a, o, s;
    const r = { container: t, padding: (n = this.option.chartBasic) == null ? void 0 : n.padding };
    return !((i = this.option.chartBasic) != null && i.height) || !((a = this.option.chartBasic) != null && a.width) ? (r.autoFit = !0, r) : (r.width = (o = this.option.chartBasic) == null ? void 0 : o.width, r.height = (s = this.option.chartBasic) == null ? void 0 : s.height, r);
  }
  afterMirrorRender() {
    var t, r, n, i, a, o, s;
    if (Et !== void 0 && Et.length === 2) {
      const l = (r = (t = Et[0].getOptions().data) == null ? void 0 : t.length) != null ? r : 0, u = (i = (n = this.option.scrollbar) == null ? void 0 : n.max) != null ? i : 31;
      if (l > u) {
        const f = Et[0].coordinateBBox.width;
        let y = 30;
        f === 1515 && (y = 31);
        const d = (o = (a = this.option.scrollbar) == null ? void 0 : a.categorySize) != null ? o : f / y;
        Et[0].option("scrollbar", {
          type: "horizontal",
          categorySize: d,
          style: {
            thumbColor: "rgba(153,153,153,0)",
            thumbHighlightColor: "rgba(153,153,153,0)",
            height: 0
          }
        }), Et[1].option("scrollbar", {
          type: "horizontal",
          categorySize: d,
          style: {
            thumbColor: "rgba(153,153,153,0)",
            thumbHighlightColor: "rgba(153,153,153,0)",
            height: 0
          }
        }), (s = this.chart) == null || s.render(!0);
      }
    }
  }
  update(t) {
    var r;
    (r = this.chart) == null || r.clear(), this.option = t, this.changeThemeOption(t), this.data = t.data, this.configParams(), this.render();
  }
  render() {
    this.chart ? (this.chart.render(), (this.option.transpose === "mirror" || this.option.transpose === "horizontalMirror") && this.afterMirrorRender()) : console.error("\u6761\u5F62\u56FE\u7ED8\u5236\u56FE\u5F62\u5931\u8D25");
  }
}
const sm = /* @__PURE__ */ kt({
  __name: "IntervalChart",
  props: {
    theme: null,
    data: { default: () => [] },
    xField: { default: "x" },
    yField: { default: "y" },
    chartBasic: null,
    seriesField: null,
    tooltip: null,
    axis: null,
    legend: null,
    color: null,
    fillColor: null,
    annotation: null,
    transpose: null,
    adjust: null,
    style: null,
    interaction: null,
    scrollbar: null
  },
  setup(e) {
    const t = e;
    function r(a) {
      a.stopPropagation();
    }
    const n = L(), i = new om(t);
    return re(() => {
      i.initChart(n.value);
    }), wt(
      () => t,
      (a) => {
        i.update(a);
      },
      { deep: !0 }
    ), (a, o) => (ot(), st("div", {
      ref_key: "interContainer",
      ref: n,
      style: { height: "100%", width: "100%" },
      onMousewheel: o[0] || (o[0] = mi((s) => r(s), ["prevent"]))
    }, null, 544));
  }
}), lm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sm
}, Symbol.toStringTag, { value: "Module" }));
class io {
  constructor(t) {
    nt(this, "chart");
    nt(this, "dataArea", [0, 1]);
    nt(this, "_option", {});
    this.option = t;
  }
  get option() {
    return this._option;
  }
  set option(t) {
    this._option = te(bh(t)), this._option = this.extractionData(this._option);
  }
  initChart(t) {
    this.chart = new ve(this.handlerChartOption(t)), this.configParams(), this.render();
  }
  configParams() {
    this.setData(), this.setAxis(), this.setSlider(), this.setLine(), this.setTooltip(), this.setLegend(), this.setAnnotation(), this.chart.animate(!1);
  }
  setData() {
    var t;
    (t = this.chart) == null || t.data(this.option.data);
  }
  setLine() {
    var r, n, i, a, o, s, l;
    const t = this.chart.line();
    if (t.position(`${this.option.xField}*${this.option.yField}`), t.style((n = (r = this.option.line) == null ? void 0 : r.style) != null ? n : {}), this.option.seriesField)
      t.color(this.option.seriesField, this.option.color);
    else {
      let u = (i = this.option.color) != null ? i : "#1890ff";
      ht(this.option.color) && (u = (a = this.option.color[0]) != null ? a : "#1890ff"), t.color(u);
    }
    (o = this.option.line) != null && o.smooth && t.shape("smooth"), (s = this.option.line) != null && s.point && this.chart.point().position(`${this.option.xField}*${this.option.yField}`).style(this.option.line.point).size((l = this.option.line.point.size) != null ? l : 2);
  }
  setAxis() {
    var n, i;
    if (this.option.axis === !1) {
      this.chart.axis(!1);
      return;
    }
    const t = ((n = this.option.axis) == null ? void 0 : n.xAxis) === void 0 ? {} : this.option.axis.xAxis, r = ((i = this.option.axis) == null ? void 0 : i.yAxis) === void 0 ? {} : this.option.axis.yAxis;
    this.setSingleAxis(this.option.xField, t), this.setSingleAxis(this.option.yField, r);
  }
  setSingleAxis(t, r) {
    r !== !1 ? (this.setScale(t, r.scale), this.chart.axis(t, an(r)), this.configAnnotation("text", r.unit)) : this.chart.axis(t, !1);
  }
  setScale(t, r) {
    this.chart.scale(t, r != null ? r : {});
  }
  setSlider() {
    var t;
    this.option.axis && this.option.axis.xAxis && this.option.axis.xAxis.slider && Boolean(this.option.axis.xAxis.slider) && !this.option.axis.xAxis.slider.massData && this.chart.option("slider", this.option.axis.xAxis.slider === !0 ? {} : (t = this.option.axis) == null ? void 0 : t.xAxis.slider);
  }
  setTooltip() {
    var n;
    const t = this.chart;
    if (this.option.tooltip === !1) {
      t.tooltip(!1);
      return;
    }
    const r = this.option.tooltip;
    if (r === void 0) {
      t.tooltip({
        showCrosshairs: !0
      });
      return;
    }
    t.tooltip({
      showTitle: r.title !== !1,
      customItems: r.customItems,
      domStyles: r.domStyles,
      title: r.title !== !1 ? r.title : void 0,
      showMarkers: r.marker !== !1,
      marker: r.marker,
      itemTpl: r.itemTpl,
      showCrosshairs: Boolean(r.crosshairs),
      shared: (n = r.shared) != null ? n : !0,
      crosshairs: hr(r.crosshairs) ? {} : r.crosshairs
    });
  }
  configAnnotation(t, r) {
    if (!!r)
      if (ht(r))
        for (const n of r)
          this.chart.annotation()[t](n);
      else
        this.chart.annotation()[t](r);
  }
  setAnnotation() {
    !this.option.annotation || Object.entries(this.option.annotation).forEach(([t, r]) => {
      this.configAnnotation(t, r);
    });
  }
  setLegend() {
    const t = this.chart;
    if (!this.option.legend) {
      t.legend(!1);
      return;
    }
    t.legend(this.option.legend);
  }
  handlerChartOption(t) {
    var n, i, a, o, s;
    const r = { container: t, padding: (n = this.option.chartBasic) == null ? void 0 : n.padding };
    return !((i = this.option.chartBasic) != null && i.height) || !((a = this.option.chartBasic) != null && a.width) ? (r.autoFit = !0, r) : (r.width = (o = this.option.chartBasic) == null ? void 0 : o.width, r.height = (s = this.option.chartBasic) == null ? void 0 : s.height, r);
  }
  extractionData(t) {
    if (!t.axis || !t.axis.xAxis || !t.axis.xAxis.slider)
      return t;
    const r = { ...t };
    if (t.axis.xAxis.slider !== !0 && typeof t.axis.xAxis.slider.massData == "function")
      return t.axis.xAxis.slider.massData(r, this.dataArea);
    let n = 1500;
    t.axis.xAxis.slider !== !0 && typeof t.axis.xAxis.slider.massData == "number" && (n = t.axis.xAxis.slider.massData);
    const i = Math.floor(r.data.length * this.dataArea[0]), a = Math.floor(r.data.length * this.dataArea[1]), o = r.data.slice(i, a), s = [];
    if (o.length <= n)
      return r;
    const l = o.length / (n - 1);
    for (let u = 0; u < n - 1; u++) {
      const f = Math.round(u * l);
      s.push(o[f]);
    }
    return s.push(o[o.length - 1]), this.updateAnnotationPosition(s), r.data = s, r;
  }
  updateAnnotationPosition(t) {
    if (!!this.option.annotation)
      for (const [r, n] of Object.entries(this.option.annotation))
        if (Array.isArray(n))
          for (const i in n)
            n[i].start && n[i].end && (this.option.annotation[r][i].start[0] = this.findAdjacentPosition(t, n[i].start[0], "left"), this.option.annotation[r][i].end[0] = this.findAdjacentPosition(t, n[i].end[0], "right"));
        else
          this.option.annotation[r].start[0] = this.findAdjacentPosition(t, n.start[0], "left"), this.option.annotation[r].end[0] = this.findAdjacentPosition(t, n.end[0], "left");
  }
  findAdjacentPosition(t, r, n) {
    let i = this.option.data.findIndex((a) => a[this.option.xField] === r);
    if (i === -1)
      return console.warn("\u6807\u6CE8\u8BBE\u7F6E\u5931\u8D25"), r;
    for (; i >= 0 && i < this.option.data.length; ) {
      const a = this.option.data[i][this.option.xField], o = t.findIndex((s) => s[this.option.xField] === a);
      if (o !== -1)
        return t[o][this.option.xField];
      n === "left" ? i -= 1 : i += 1;
    }
    return console.warn("\u6570\u636E\u63D0\u53D6\u65B9\u6CD5\u6709\u95EE\u9898"), r;
  }
  update(t) {
    var r;
    (r = this.chart) == null || r.clear(), this.option = t, this.configParams(), this.render();
  }
  render() {
    this.chart ? this.chart.render() : console.error("g2\u7ED8\u5236\u56FE\u5F62\u5931\u8D25");
  }
}
const ao = (e) => (ho("data-v-af634075"), e = e(), mo(), e), um = /* @__PURE__ */ ao(() => /* @__PURE__ */ J("div", { class: "icon" }, [
  /* @__PURE__ */ J("div"),
  /* @__PURE__ */ J("div")
], -1)), cm = [
  um
], fm = /* @__PURE__ */ ao(() => /* @__PURE__ */ J("div", { class: "icon" }, [
  /* @__PURE__ */ J("div"),
  /* @__PURE__ */ J("div")
], -1)), hm = [
  fm
], dm = /* @__PURE__ */ kt({
  __name: "CustomSlider",
  props: {
    option: null
  },
  emits: ["moveBlock"],
  setup(e, { emit: t }) {
    var V, Y, _, tt, et, ut, xt, St, At, ct;
    const r = e, n = Dt(() => {
      const T = te(r.option);
      return T.axis && T.axis.xAxis && T.axis.xAxis.slider && Object.prototype.toString.call(T.axis.xAxis.slider) === "[object Object]" ? T.axis.xAxis.slider : {};
    }), i = Dt(() => typeof n.value.massData == "function"), a = L(), o = L(), s = L(), l = L(), u = L(), f = 18, y = L({
      left: "0px",
      backgroundColor: (V = n.value.handlerStyle) == null ? void 0 : V.fill,
      height: `${n.value.height}px`
    }), d = L({
      left: "0px",
      backgroundColor: (Y = n.value.handlerStyle) == null ? void 0 : Y.fill,
      height: `${n.value.height}px`
    }), m = L({
      backgroundColor: (_ = n.value.backgroundStyle) == null ? void 0 : _.fill,
      height: `${n.value.height}px`,
      padding: (tt = n.value.padding) == null ? void 0 : tt.toString().replaceAll(",", " ")
    });
    function v(T) {
      return typeof T == "string" ? Number(T.replace("px", "")) : typeof T == "number" ? T : 0;
    }
    const M = Dt(() => {
      var T, P;
      return {
        width: `${v(d.value.left) - v(y.value.left) - f}px`,
        left: `${v(y.value.left) + f}px`,
        backgroundColor: (T = n.value.foregroundStyle) == null ? void 0 : T.fill,
        height: `${(P = n.value.height) != null ? P : 20}px`
      };
    });
    function k() {
      if (!l.value)
        return [0, 1];
      const T = l.value.clientWidth - f * 2, P = Math.floor((v(M.value.left) - f) / T * 1e8) / 1e8, q = Math.floor((v(M.value.left) + v(M.value.width) - f) / T * 1e8) / 1e8;
      return [P, q];
    }
    function S() {
      let T = "", P = 0, q = 0, c, h = [0, 1];
      function g() {
        const R = k();
        R[0] === h[0] && R[1] === h[1] || (h = R, t("moveBlock", R));
      }
      function p() {
        c = setInterval(() => {
          g();
        }, 200);
      }
      function b(R) {
        let H = q + (R.clientX - P);
        H < 0 && (H = 0), H >= v(d.value.left) - f && (H = v(d.value.left) - f), y.value.left = `${H}px`;
      }
      function w(R) {
        const H = q + (R.clientX - P);
        if (H >= l.value.clientWidth - f) {
          d.value.left = `${l.value.clientWidth - f}px`;
          return;
        }
        if (H < v(y.value.left) + f) {
          d.value.left = `${v(y.value.left) + f}px`;
          return;
        }
        d.value.left = `${H}px`;
      }
      function I(R) {
        const H = v(d.value.left) - v(y.value.left), Ct = R.clientX - P;
        let Ft = v(y.value.left) + Ct, Me = v(d.value.left) + Ct;
        Ft < 0 && (Ft = 0, Me = H), l.value.clientWidth - f < Me && (Me = l.value.clientWidth - f, Ft = Me - H), d.value.left = `${Me}px`, y.value.left = `${Ft}px`, P = R.clientX;
      }
      function E(R) {
        switch (T) {
          case "left":
            b(R);
            break;
          case "right":
            w(R);
            break;
          case "drag":
            I(R);
            break;
        }
      }
      function rt(R) {
        !a.value || !l.value || !o.value || !s.value || (p(), T = "left", P = R.clientX, q = v(o.value.style.left), document.addEventListener("mousemove", E));
      }
      function N(R) {
        !a.value || !l.value || !o.value || !s.value || (p(), T = "right", P = R.clientX, q = Number(s.value.style.left.replace("px", "")), document.addEventListener("mousemove", E));
      }
      function B(R) {
        !a.value || !l.value || !o.value || !s.value || (p(), T = "drag", P = R.clientX, document.addEventListener("mousemove", E));
      }
      function K() {
        clearInterval(c), T = "", document.removeEventListener("mousemove", E), g();
      }
      function U() {
        !a.value || !l.value || !o.value || !s.value || (o.value.addEventListener("mousedown", rt), s.value.addEventListener("mousedown", N), a.value.addEventListener("mousedown", B), document.addEventListener("mouseup", K));
      }
      function mt() {
        !a.value || !l.value || !o.value || !s.value || (o.value.removeEventListener("mousedown", rt), s.value.removeEventListener("mousedown", N), a.value.removeEventListener("mousedown", B), document.removeEventListener("mouseup", K));
      }
      return {
        mountEvent: U,
        destroyEvent: mt
      };
    }
    const A = S(), C = new io({
      chartBasic: { padding: [5, 0, 5, 0], height: n.value.height },
      xField: r.option.xField,
      yField: r.option.yField,
      data: r.option.data,
      axis: !1,
      line: {
        smooth: (et = n.value.trendCfg) == null ? void 0 : et.smooth,
        style: {
          lineWidth: (xt = (ut = n.value.trendCfg) == null ? void 0 : ut.lineStyle) == null ? void 0 : xt.lineWidth
        }
      },
      tooltip: !1,
      color: (ct = (At = (St = n.value.trendCfg) == null ? void 0 : St.lineStyle) == null ? void 0 : At.fill) != null ? ct : "rgb(116,116,116)"
    });
    return re(() => {
      i.value && (d.value.left = `${l.value.clientWidth - f}px`, C.initChart(u.value), A.mountEvent());
    }), co(() => {
      A.destroyEvent();
    }), (T, P) => {
      var q;
      return yt(i) ? (ot(), st("div", {
        key: 0,
        class: "slider",
        style: Gt({ height: `${(q = yt(n).height) != null ? q : 20}px` })
      }, [
        J("div", {
          ref_key: "box",
          ref: l,
          class: "drag-bar-box",
          style: Gt(m.value)
        }, [
          J("div", {
            ref_key: "drag",
            ref: a,
            class: "drag-bar",
            style: Gt(yt(M))
          }, null, 4),
          J("div", {
            ref_key: "scaleleft",
            ref: o,
            class: "drag-block",
            style: Gt(y.value)
          }, cm, 4),
          J("div", {
            ref_key: "scaleright",
            ref: s,
            class: "drag-block",
            style: Gt(d.value)
          }, hm, 4)
        ], 4),
        J("div", {
          ref_key: "miniChart",
          ref: u,
          class: "drag-area"
        }, null, 512)
      ], 4)) : fo("", !0);
    };
  }
});
const oo = /* @__PURE__ */ Xe(dm, [["__scopeId", "data-v-af634075"]]), mm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oo
}, Symbol.toStringTag, { value: "Module" })), gm = { style: { width: "100%", height: "100%" } }, pm = /* @__PURE__ */ kt({
  __name: "Line",
  props: {
    theme: null,
    data: { default: () => [] },
    xField: { default: "x" },
    yField: { default: "y" },
    color: null,
    line: null,
    chartBasic: null,
    seriesField: null,
    tooltip: null,
    axis: null,
    legend: null,
    annotation: null
  },
  emits: ["position"],
  setup(e, { emit: t }) {
    const r = e, n = L(), i = new io(r);
    function a(o) {
      t("position", o), i.dataArea = o, i.update(r);
    }
    return re(() => {
      i.initChart(n.value);
    }), wt(
      r,
      (o) => {
        i.update(o);
      },
      { deep: !0 }
    ), (o, s) => (ot(), st("div", gm, [
      J("div", {
        ref_key: "chartContainer",
        ref: n,
        style: { width: "100%", height: "100%" }
      }, null, 512),
      Ve(oo, {
        option: r,
        onMoveBlock: a
      })
    ]));
  }
}), ym = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pm
}, Symbol.toStringTag, { value: "Module" }));
class vm {
  constructor(t) {
    nt(this, "chart");
    this.chart = new ve(t);
  }
  draw(t) {
    var d, m, v, M, k, S, A;
    this.chart.clear();
    const r = (d = t.data) != null ? d : [];
    this.chart.data(r);
    const n = t.color, i = (m = t.xField) != null ? m : "x", a = (v = t.yField) != null ? v : "y", o = t.seriesField, s = this.getArea(i, a);
    if (this.setColor(s, o, n), (k = (M = t.line) == null ? void 0 : M.line) != null ? k : !0) {
      const C = this.getLine(i, a);
      this.setColor(C, o, n);
    }
    if ((A = (S = t.line) == null ? void 0 : S.point) != null ? A : !1) {
      const C = this.getPoint(i, a);
      this.setColor(C, o, n);
    }
    const f = t.coordinate;
    this.setCoordinate(f);
    const y = t.axis;
    this.setAxis(i, a, y), this.chart.render();
  }
  getPoint(t = "x", r = "y", n = this.chart) {
    return n.point().position(`${t}*${r}`);
  }
  getLine(t = "x", r = "y", n = this.chart) {
    return n.line().position(`${t}*${r}`);
  }
  getArea(t = "x", r = "y", n = this.chart) {
    return n.area().position(`${t}*${r}`);
  }
  setCoordinate(t, r = this.chart) {
    t === void 0 ? r.coordinate("polar", {
      radius: 0.8
    }) : r.coordinate("polar", {
      radius: t.radius
    });
  }
  setAxis(t = "x", r = "y", n, i = this.chart) {
    const a = {
      line: null,
      tickLine: null,
      grid: {
        line: {
          type: "line",
          style: {
            lineDash: null
          }
        }
      }
    };
    if (n === void 0) {
      i.axis(`${t}`, a), i.axis(`${r}`, a);
      return;
    }
    if (typeof n == "boolean") {
      i.axis(n);
      return;
    }
    const o = n.xAxis, s = n.yAxis;
    let l = {}, u = {};
    typeof o != "boolean" && (l = {
      ...a,
      ...o
    }), typeof o != "boolean" && (u = {
      ...a,
      ...s
    }), (n == null ? void 0 : n.xAxis) !== void 0 && i.axis(`${t}`, l), (n == null ? void 0 : n.yAxis) !== void 0 && i.axis(`${r}`, u);
  }
  setColor(t, r, n) {
    r !== void 0 && t.color(`${r}`, n);
  }
}
const bm = /* @__PURE__ */ kt({
  __name: "RadarChart",
  props: {
    data: null,
    chartBasic: null,
    tooltip: null,
    coordinate: null,
    axis: null,
    xField: null,
    yField: null,
    seriesField: null,
    color: null,
    line: null
  },
  setup(e) {
    const t = e, r = L();
    let n;
    return re(() => {
      n = new vm({
        container: r.value,
        autoFit: !0
      }), n.draw(t);
    }), wt(
      t,
      (i) => {
        n.draw(i), console.log("RadarChart watch props has change");
      },
      { deep: !0 }
    ), (i, a) => (ot(), st("div", {
      class: "radar-box",
      ref_key: "radarContainer",
      ref: r
    }, null, 512));
  }
});
const wm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bm
}, Symbol.toStringTag, { value: "Module" })), di = /* @__PURE__ */ Object.assign({ "./g2/area/Area.vue": Th, "./g2/circular-progress/CircularProgress.vue": Fh, "./g2/dashBoard/DashBoard.vue": jh, "./g2/doubleRing/AutoLightCircular.vue": Vh, "./g2/doubleRing/AutoLightTextMarkerCircular.vue": Qh, "./g2/doubleRing/TextMarkerCircular.vue": od, "./g2/interval/IntervalChart.vue": lm, "./g2/line/CustomSlider.vue": mm, "./g2/line/Line.vue": ym, "./g2/pie/Pie.vue": Nh, "./g2/radar/RadarChart.vue": wm }), Tm = {
  install(e) {
    for (const t in di) {
      const r = di[t].default;
      e.component(r.__name, r);
    }
  }
};
export {
  Tm as default
};
