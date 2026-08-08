import { t as e } from "./rolldown-runtime.DhnBybyj.mjs";
import {
  A as t,
  C as n,
  D as r,
  I as i,
  M as a,
  N as o,
  P as s,
  R as c,
  T as l,
  b as u,
  c as d,
  g as f,
  k as p,
  l as m,
  o as h,
  s as g,
  v as ee,
  y as te,
} from "./react.DXfOPtms.mjs";
import { a as _, r as v, t as y, x as b } from "./motion.CH5hECNx.mjs";
import {
  G as ne,
  H as re,
  J as ie,
  U as ae,
  V as x,
  W as oe,
  X as se,
  Y as ce,
  Z as le,
  a as ue,
  h as de,
  k as fe,
  l as pe,
  m as me,
  n as he,
  p as ge,
  q as _e,
  r as S,
  t as ve,
  v as ye,
  w as be,
  z as xe,
} from "./framer.CspkTmZN.mjs";
function C(e) {
  for (
    var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1;
    n < arguments.length;
    n++
  )
    t += `&args[]=` + encodeURIComponent(arguments[n]);
  return (
    `Minified React error #` +
    e +
    `; visit ` +
    t +
    ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function Se(e) {
  return V.call(Jn, e) ? !0 : V.call(qn, e) ? !1 : Kn.test(e) ? (Jn[e] = !0) : ((qn[e] = !0), !1);
}
function w(e, t, n, r, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
function Ce(e) {
  return e[1].toUpperCase();
}
function T(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = Qn.exec(e);
  if (t) {
    var n,
      r = ``,
      i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = `&quot;`;
          break;
        case 38:
          t = `&amp;`;
          break;
        case 39:
          t = `&#x27;`;
          break;
        case 60:
          t = `&lt;`;
          break;
        case 62:
          t = `&gt;`;
          break;
        default:
          continue;
      }
      (i !== n && (r += e.substring(i, n)), (i = n + 1), (r += t));
    }
    e = i === n ? r : r + e.substring(i, n);
  }
  return e;
}
function E(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function we(e, t, n) {
  switch (t) {
    case `select`:
      return E(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return E(2, null);
    case `math`:
      return E(3, null);
    case `foreignObject`:
      return E(1, null);
    case `table`:
      return E(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return E(5, null);
    case `colgroup`:
      return E(7, null);
    case `tr`:
      return E(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? E(1, null) : e;
}
function Te(e, t, n) {
  if (typeof n != `object`) throw Error(C(62));
  for (var r in ((t = !0), n))
    if (V.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = T(r);
          i = T((`` + i).trim());
        } else {
          a = r;
          var o = nr.get(a);
          (o !== void 0 ||
            ((o = T(a.replace($n, `-$1`).toLowerCase().replace(er, `-ms-`))), nr.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || V.call(Xn, r)
                  ? `` + i
                  : i + `px`
                : T((`` + i).trim())));
        }
        t ? ((t = !1), e.push(` style="`, a, `:`, i)) : e.push(`;`, a, `:`, i);
      }
    }
  t || e.push(`"`);
}
function D(e, t, n, r) {
  switch (n) {
    case `style`:
      Te(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) {
    if (((t = H.hasOwnProperty(n) ? H[n] : null), t !== null)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return;
      }
      switch (((n = t.attributeName), t.type)) {
        case 3:
          r && e.push(` `, n, `=""`);
          break;
        case 4:
          !0 === r ? e.push(` `, n, `=""`) : !1 !== r && e.push(` `, n, `="`, T(r), `"`);
          break;
        case 5:
          isNaN(r) || e.push(` `, n, `="`, T(r), `"`);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(` `, n, `="`, T(r), `"`);
          break;
        default:
          (t.sanitizeURL && (r = `` + r), e.push(` `, n, `="`, T(r), `"`));
      }
    } else if (Se(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)) return;
      }
      e.push(` `, n, `="`, T(r), `"`);
    }
  }
}
function Ee(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(C(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(C(61));
    ((t = t.__html), t != null && e.push(`` + t));
  }
}
function De(e) {
  var t = ``;
  return (
    Gn.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function Oe(e, t, n, r) {
  e.push(O(n));
  var i,
    a = (n = null);
  for (i in t)
    if (V.call(t, i)) {
      var o = t[i];
      if (o != null)
        switch (i) {
          case `children`:
            n = o;
            break;
          case `dangerouslySetInnerHTML`:
            a = o;
            break;
          default:
            D(e, r, i, o);
        }
    }
  return (e.push(`>`), Ee(e, a, n), typeof n == `string` ? (e.push(T(n)), null) : n);
}
function O(e) {
  var t = ir.get(e);
  if (t === void 0) {
    if (!rr.test(e)) throw Error(C(65, e));
    ((t = `<` + e), ir.set(e, t));
  }
  return t;
}
function ke(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(O(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (V.call(n, u)) {
          var s = n[u];
          if (s != null)
            switch (u) {
              case `children`:
                a = s;
                break;
              case `dangerouslySetInnerHTML`:
                o = s;
                break;
              case `defaultValue`:
              case `value`:
                break;
              default:
                D(e, r, u, s);
            }
        }
      return (e.push(`>`), Ee(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(O(`option`)));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (V.call(n, a)) {
          var d = n[a];
          if (d != null)
            switch (a) {
              case `children`:
                s = d;
                break;
              case `selected`:
                l = d;
                break;
              case `dangerouslySetInnerHTML`:
                u = d;
                break;
              case `value`:
                c = d;
              default:
                D(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? De(s) : `` + c), tr(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(` selected=""`);
              break;
            }
        } else `` + o === n && e.push(` selected=""`);
      else l && e.push(` selected=""`);
      return (e.push(`>`), Ee(e, u, s), s);
    case `textarea`:
      for (s in (e.push(O(`textarea`)), (u = o = a = null), n))
        if (V.call(n, s) && ((c = n[s]), c != null))
          switch (s) {
            case `children`:
              u = c;
              break;
            case `value`:
              a = c;
              break;
            case `defaultValue`:
              o = c;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(C(91));
            default:
              D(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(`>`), u != null)) {
        if (a != null) throw Error(C(92));
        if (tr(u) && 1 < u.length) throw Error(C(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(`
`),
        a !== null && e.push(T(`` + a)),
        null
      );
    case `input`:
      for (o in (e.push(O(`input`)), (c = u = s = a = null), n))
        if (V.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(C(399, `input`));
            case `defaultChecked`:
              c = l;
              break;
            case `defaultValue`:
              s = l;
              break;
            case `checked`:
              u = l;
              break;
            case `value`:
              a = l;
              break;
            default:
              D(e, r, o, l);
          }
      return (
        u === null ? c !== null && D(e, r, `checked`, c) : D(e, r, `checked`, u),
        a === null ? s !== null && D(e, r, `value`, s) : D(e, r, `value`, a),
        e.push(`/>`),
        null
      );
    case `menuitem`:
      for (var f in (e.push(O(`menuitem`)), n))
        if (V.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(C(400));
            default:
              D(e, r, f, a);
          }
      return (e.push(`>`), null);
    case `title`:
      for (d in (e.push(O(`title`)), (a = null), n))
        if (V.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(C(434));
            default:
              D(e, r, d, o);
          }
      return (e.push(`>`), a);
    case `listing`:
    case `pre`:
      for (c in (e.push(O(t)), (o = a = null), n))
        if (V.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              D(e, r, c, s);
          }
      if ((e.push(`>`), o != null)) {
        if (a != null) throw Error(C(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(C(61));
        ((n = o.__html),
          n != null &&
            (typeof n == `string` &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(
                  `
`,
                  n,
                )
              : e.push(`` + n)));
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(`
`),
        a
      );
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `img`:
    case `keygen`:
    case `link`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
      for (var p in (e.push(O(t)), n))
        if (V.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(C(399, t));
            default:
              D(e, r, p, a);
          }
      return (e.push(`/>`), null);
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return Oe(e, n, t, r);
    case `html`:
      return (i.insertionMode === 0 && e.push(`<!DOCTYPE html>`), Oe(e, n, t, r));
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return Oe(e, n, t, r);
      for (l in (e.push(O(t)), (o = a = null), n))
        if (V.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              Te(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              Se(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(` `, l, `="`, T(s), `"`);
          }
      return (e.push(`>`), Ee(e, o, a), a);
  }
}
function Ae(e, t, n) {
  if ((e.push(`<!--$?--><template id="`), n === null)) throw Error(C(395));
  return (e.push(n), e.push(`"></template>`));
}
function je(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (
        e.push(`<div hidden id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 2:
      return (
        e.push(`<svg aria-hidden="true" style="display:none" id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 3:
      return (
        e.push(`<math aria-hidden="true" style="display:none" id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 4:
      return (
        e.push(`<table hidden id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 5:
      return (
        e.push(`<table hidden><tbody id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 6:
      return (
        e.push(`<table hidden><tr id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 7:
      return (
        e.push(`<table hidden><colgroup id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    default:
      throw Error(C(397));
  }
}
function Me(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return e.push(`</div>`);
    case 2:
      return e.push(`</svg>`);
    case 3:
      return e.push(`</math>`);
    case 4:
      return e.push(`</table>`);
    case 5:
      return e.push(`</tbody></table>`);
    case 6:
      return e.push(`</tr></table>`);
    case 7:
      return e.push(`</colgroup></table>`);
    default:
      throw Error(C(397));
  }
}
function Ne(e) {
  return JSON.stringify(e).replace(ar, function (e) {
    switch (e) {
      case `<`:
        return `\\u003c`;
      case `\u2028`:
        return `\\u2028`;
      case `\u2029`:
        return `\\u2029`;
      default:
        throw Error(
          `escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`,
        );
    }
  });
}
function Pe(e, t) {
  return (
    (t = t === void 0 ? `` : t),
    {
      bootstrapChunks: [],
      startInlineScript: `<script>`,
      placeholderPrefix: t + `P:`,
      segmentPrefix: t + `S:`,
      boundaryPrefix: t + `B:`,
      idPrefix: t,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1,
      generateStaticMarkup: e,
    }
  );
}
function Fe(e, t, n, r) {
  return n.generateStaticMarkup
    ? (e.push(T(t)), !1)
    : (t === `` ? (e = r) : (r && e.push(`<!-- -->`), e.push(T(t)), (e = !0)), e);
}
function Ie(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case lr:
      return `Fragment`;
    case cr:
      return `Portal`;
    case dr:
      return `Profiler`;
    case ur:
      return `StrictMode`;
    case hr:
      return `Suspense`;
    case gr:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case pr:
        return (e.displayName || `Context`) + `.Consumer`;
      case fr:
        return (e._context.displayName || `Context`) + `.Provider`;
      case mr:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case _r:
        return ((t = e.displayName || null), t === null ? Ie(e.type) || `Memo` : t);
      case vr:
        ((t = e._payload), (e = e._init));
        try {
          return Ie(e(t));
        } catch {}
    }
  return null;
}
function Le(e, t) {
  if (((e = e.contextTypes), !e)) return wr;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function Re(e, t) {
  if (e !== t) {
    ((e.context._currentValue2 = e.parentValue), (e = e.parent));
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(C(401));
    } else {
      if (n === null) throw Error(C(401));
      Re(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function ze(e) {
  ((e.context._currentValue2 = e.parentValue), (e = e.parent), e !== null && ze(e));
}
function Be(e) {
  var t = e.parent;
  (t !== null && Be(t), (e.context._currentValue2 = e.value));
}
function Ve(e, t) {
  if (((e.context._currentValue2 = e.parentValue), (e = e.parent), e === null)) throw Error(C(402));
  e.depth === t.depth ? Re(e, t) : Ve(e, t);
}
function He(e, t) {
  var n = t.parent;
  if (n === null) throw Error(C(402));
  (e.depth === n.depth ? Re(e, n) : He(e, n), (t.context._currentValue2 = t.value));
}
function Ue(e) {
  var t = Tr;
  t !== e &&
    (t === null
      ? Be(e)
      : e === null
        ? ze(t)
        : t.depth === e.depth
          ? Re(t, e)
          : t.depth > e.depth
            ? Ve(t, e)
            : He(t, e),
    (Tr = e));
}
function We(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  ((e.updater = Er), (e.props = n), (e.state = i));
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue2 : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` && ((o = o(n, i)), (i = o == null ? i : or({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(),
      t !== e.state && Er.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (((t = a.queue), (o = a.replace), (a.queue = null), (a.replace = !1), o && t.length === 1))
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = o ? 1 : 0; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = or({}, a, s))) : or(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function Ge(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - Or(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - Or(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - Or(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function Ke(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((kr(e) / Ar) | 0)) | 0);
}
function qe(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function Je() {
  if (U === null) throw Error(C(321));
  return U;
}
function Ye() {
  if (0 < Lr) throw Error(C(312));
  return { memoizedState: null, queue: null, next: null };
}
function Xe() {
  return (
    W === null
      ? Nr === null
        ? ((Pr = !1), (Nr = W = Ye()))
        : ((Pr = !0), (W = Nr))
      : W.next === null
        ? ((Pr = !1), (W = W.next = Ye()))
        : ((Pr = !0), (W = W.next)),
    W
  );
}
function Ze() {
  ((Mr = U = null), (Fr = !1), (Nr = null), (Lr = 0), (W = G = null));
}
function Qe(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function $e(e, t, n) {
  if (((U = Je()), (W = Xe()), Pr)) {
    var r = W.queue;
    if (((t = r.dispatch), G !== null && ((n = G.get(r)), n !== void 0))) {
      (G.delete(r), (r = W.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return ((W.memoizedState = r), [r, t]);
    }
    return [W.memoizedState, t];
  }
  return (
    (e = e === Qe ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    (W.memoizedState = e),
    (e = W.queue = { last: null, dispatch: null }),
    (e = e.dispatch = tt.bind(null, U, e)),
    [W.memoizedState, e]
  );
}
function et(e, t) {
  if (((U = Je()), (W = Xe()), (t = t === void 0 ? null : t), W !== null)) {
    var n = W.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!jr(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return ((e = e()), (W.memoizedState = [e, t]), e);
}
function tt(e, t, n) {
  if (25 <= Lr) throw Error(C(301));
  if (e === U)
    if (
      ((Fr = !0),
      (e = { action: n, next: null }),
      G === null && (G = new Map()),
      (n = G.get(t)),
      n === void 0)
    )
      G.set(t, e);
    else {
      for (t = n; t.next !== null; ) t = t.next;
      t.next = e;
    }
}
function nt() {
  throw Error(C(394));
}
function rt() {}
function it(e) {
  return (console.error(e), null);
}
function at() {}
function ot(e, t, n, r, i, a, o, s, c) {
  var l = [],
    u = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: u,
      pingedTasks: l,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? it : i,
      onAllReady: a === void 0 ? at : a,
      onShellReady: o === void 0 ? at : o,
      onShellError: s === void 0 ? at : s,
      onFatalError: c === void 0 ? at : c,
    }),
    (n = ct(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = st(t, e, null, n, u, wr, null, Dr)),
    l.push(e),
    t
  );
}
function st(e, t, n, r, i, a, o, s) {
  (e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++);
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      (t.push(c), t.length === 1 && xt(e));
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: a,
    context: o,
    treeContext: s,
  };
  return (i.add(c), c);
}
function ct(e, t, n, r, i, a) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: a,
  };
}
function lt(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`,
    );
  return e;
}
function ut(e, t) {
  var n = e.onShellError;
  (n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), e.destination.destroy(t)));
}
function dt(e, t, n, r, i) {
  for (U = {}, Mr = t, Ir = 0, e = n(r, i); Fr; )
    ((Fr = !1), (Ir = 0), (Lr += 1), (W = null), (e = n(r, i)));
  return (Ze(), e);
}
function ft(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(C(108, Ie(r) || `Unknown`, s));
      r = or({}, o, n);
    }
    ((t.legacyContext = r), k(e, t, i), (t.legacyContext = o));
  } else k(e, t, i);
}
function pt(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = or({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function mt(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = Le(n, t.legacyContext);
      var a = n.contextType;
      ((a = new n(r, typeof a == `object` && a ? a._currentValue2 : i)),
        We(a, n, r, i),
        ft(e, t, a, n));
    } else {
      ((a = Le(n, t.legacyContext)), (i = dt(e, t, n, r, a)));
      var o = Ir !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0)
        (We(i, n, r, a), ft(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = Ge(r, 1, 0)));
        try {
          k(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else k(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case xr:
        case br:
        case ur:
        case dr:
        case lr:
          k(e, t, r.children);
          return;
        case gr:
          k(e, t, r.children);
          return;
        case yr:
          throw Error(C(343));
        case hr:
          e: {
            ((n = t.blockedBoundary),
              (i = t.blockedSegment),
              (a = r.fallback),
              (r = r.children),
              (o = new Set()));
            var s = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: o,
                errorDigest: null,
              },
              c = ct(e, i.chunks.length, s, i.formatContext, !1, !1);
            (i.children.push(c), (i.lastPushedText = !1));
            var l = ct(e, 0, null, i.formatContext, !1, !1);
            ((l.parentFlushed = !0), (t.blockedBoundary = s), (t.blockedSegment = l));
            try {
              if (
                (gt(e, t, r),
                e.responseState.generateStaticMarkup ||
                  (l.lastPushedText && l.textEmbedded && l.chunks.push(`<!-- -->`)),
                (l.status = 1),
                yt(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              ((l.status = 4), (s.forceClientRender = !0), (s.errorDigest = lt(e, t)));
            } finally {
              ((t.blockedBoundary = n), (t.blockedSegment = i));
            }
            ((t = st(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t));
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case mr:
            if (((r = dt(e, t, n.render, r, i)), Ir !== 0)) {
              ((n = t.treeContext), (t.treeContext = Ge(n, 1, 0)));
              try {
                k(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else k(e, t, r);
            return;
          case _r:
            ((n = n.type), (r = pt(n, r)), mt(e, t, n, r, i));
            return;
          case fr:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue2),
              (n._currentValue2 = r),
              (o = Tr),
              (Tr = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              k(e, t, i),
              (e = Tr),
              e === null)
            )
              throw Error(C(403));
            ((r = e.parentValue),
              (e.context._currentValue2 = r === Sr ? e.context._defaultValue : r),
              (e = Tr = e.parent),
              (t.context = e));
            return;
          case pr:
            ((r = r.children), (r = r(n._currentValue2)), k(e, t, r));
            return;
          case vr:
            ((i = n._init), (n = i(n._payload)), (r = pt(n, r)), mt(e, t, n, r, void 0));
            return;
        }
      throw Error(C(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = ke(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = we(o, n, r)),
      gt(e, t, a),
      (i.formatContext = o),
      n)
    ) {
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `input`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        break;
      default:
        i.chunks.push(`</`, n, `>`);
    }
    i.lastPushedText = !1;
  }
}
function k(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case sr:
        mt(e, t, n.type, n.props, n.ref);
        return;
      case cr:
        throw Error(C(257));
      case vr:
        var r = n._init;
        ((n = r(n._payload)), k(e, t, n));
        return;
    }
    if (tr(n)) {
      ht(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (Cr && n[Cr]) || n[`@@iterator`]), (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do (i.push(n.value), (n = r.next()));
        while (!n.done);
        ht(e, t, i);
      }
      return;
    }
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        C(31, e === `[object Object]` ? `object with keys {` + Object.keys(n).join(`, `) + `}` : e),
      )
    );
  }
  typeof n == `string`
    ? ((r = t.blockedSegment),
      (r.lastPushedText = Fe(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = Fe(t.blockedSegment.chunks, `` + n, e.responseState, r.lastPushedText)));
}
function ht(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = Ge(a, r, i);
    try {
      gt(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function gt(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return k(e, t, n);
  } catch (c) {
    if ((Ze(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        Ue(a),
        c
      );
    n = c;
    var o = t.blockedSegment,
      s = ct(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    (o.children.push(s),
      (o.lastPushedText = !1),
      (e = st(
        e,
        t.node,
        t.blockedBoundary,
        s,
        t.abortSet,
        t.legacyContext,
        t.context,
        t.treeContext,
      ).ping),
      n.then(e, e),
      (t.blockedSegment.formatContext = r),
      (t.legacyContext = i),
      (t.context = a),
      Ue(a));
  }
}
function _t(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), bt(this, t, e));
}
function vt(e, t, n) {
  var r = e.blockedBoundary;
  ((e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 && ((t.status = 2), t.destination !== null && t.destination.push(null)))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(C(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return vt(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function yt(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && yt(e, n));
  } else e.completedSegments.push(t);
}
function bt(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(C(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 && ((e.onShellError = at), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && yt(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(_t, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (yt(t, n),
            t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function xt(e) {
  if (e.status !== 2) {
    var t = Tr,
      n = Br.current;
    Br.current = Rr;
    var r = zr;
    zr = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          Ue(o.context);
          try {
            (k(s, o, o.node),
              s.responseState.generateStaticMarkup ||
                (c.lastPushedText && c.textEmbedded && c.chunks.push(`<!-- -->`)),
              o.abortSet.delete(o),
              (c.status = 1),
              bt(s, o.blockedBoundary, c));
          } catch (e) {
            if ((Ze(), typeof e == `object` && e && typeof e.then == `function`)) {
              var l = o.ping;
              e.then(l, l);
            } else {
              (o.abortSet.delete(o), (c.status = 4));
              var u = o.blockedBoundary,
                d = e,
                f = lt(s, d);
              if (
                (u === null
                  ? ut(s, d)
                  : (u.pendingTasks--,
                    u.forceClientRender ||
                      ((u.forceClientRender = !0),
                      (u.errorDigest = f),
                      u.parentFlushed && s.clientRenderedBoundaries.push(u))),
                s.allPendingTasks--,
                s.allPendingTasks === 0)
              ) {
                var p = s.onAllReady;
                p();
              }
            }
          }
        }
      }
      (a.splice(0, i), e.destination !== null && Dt(e, e.destination));
    } catch (t) {
      (lt(e, t), ut(e, t));
    } finally {
      ((zr = r), (Br.current = n), n === Rr && Ue(t));
    }
  }
}
function St(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        t.push(`<template id="`),
        t.push(e.placeholderPrefix),
        (e = r.toString(16)),
        t.push(e),
        t.push(`"></template>`)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) t.push(r[a]);
        i = Ct(e, t, i);
      }
      for (; a < r.length - 1; a++) t.push(r[a]);
      return (a < r.length && (i = t.push(r[a])), i);
    default:
      throw Error(C(390));
  }
}
function Ct(e, t, n) {
  var r = n.boundary;
  if (r === null) return St(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    return (
      e.responseState.generateStaticMarkup ||
        ((r = r.errorDigest),
        t.push(`<!--$!-->`),
        t.push(`<template`),
        r && (t.push(` data-dgst="`), (r = T(r)), t.push(r), t.push(`"`)),
        t.push(`></template>`)),
      St(e, t, n),
      (e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`)),
      e
    );
  if (0 < r.pendingTasks) {
    ((r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r));
    var i = e.responseState,
      a = i.nextSuspenseID++;
    return (
      (i = i.boundaryPrefix + a.toString(16)),
      (r = r.id = i),
      Ae(t, e.responseState, r),
      St(e, t, n),
      t.push(`<!--/$-->`)
    );
  }
  if (r.byteSize > e.progressiveChunkSize)
    return (
      (r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      Ae(t, e.responseState, r.id),
      St(e, t, n),
      t.push(`<!--/$-->`)
    );
  if (
    (e.responseState.generateStaticMarkup || t.push(`<!--$-->`),
    (n = r.completedSegments),
    n.length !== 1)
  )
    throw Error(C(391));
  return (Ct(e, t, n[0]), (e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`)), e);
}
function wt(e, t, n) {
  return (je(t, e.responseState, n.formatContext, n.id), Ct(e, t, n), Me(t, n.formatContext));
}
function Tt(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) Et(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    t.push(e.startInlineScript),
    e.sentCompleteBoundaryFunction
      ? t.push(`$RC("`)
      : ((e.sentCompleteBoundaryFunction = !0),
        t.push(
          `function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`,
        )),
    r === null)
  )
    throw Error(C(395));
  return (
    (n = n.toString(16)),
    t.push(r),
    t.push(`","`),
    t.push(e.segmentPrefix),
    t.push(n),
    t.push(`")<\/script>`)
  );
}
function Et(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(C(392));
    return wt(e, t, r);
  }
  return (
    wt(e, t, r),
    (e = e.responseState),
    t.push(e.startInlineScript),
    e.sentCompleteSegmentFunction
      ? t.push(`$RS("`)
      : ((e.sentCompleteSegmentFunction = !0),
        t.push(
          `function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`,
        )),
    t.push(e.segmentPrefix),
    (i = i.toString(16)),
    t.push(i),
    t.push(`","`),
    t.push(e.placeholderPrefix),
    t.push(i),
    t.push(`")<\/script>`)
  );
}
function Dt(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (Ct(e, t, n), (e.completedRootSegment = null));
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) t.push(r[n]);
      n < r.length && t.push(r[n]);
    }
    var i,
      a = e.clientRenderedBoundaries;
    for (i = 0; i < a.length; i++) {
      var o = a[i];
      r = t;
      var s = e.responseState,
        c = o.id,
        l = o.errorDigest,
        u = o.errorMessage,
        d = o.errorComponentStack;
      if (
        (r.push(s.startInlineScript),
        s.sentClientRenderFunction
          ? r.push(`$RX("`)
          : ((s.sentClientRenderFunction = !0),
            r.push(
              `function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`,
            )),
        c === null)
      )
        throw Error(C(395));
      if ((r.push(c), r.push(`"`), l || u || d)) {
        r.push(`,`);
        var f = Ne(l || ``);
        r.push(f);
      }
      if (u || d) {
        r.push(`,`);
        var p = Ne(u || ``);
        r.push(p);
      }
      if (d) {
        r.push(`,`);
        var m = Ne(d);
        r.push(m);
      }
      if (!r.push(`)<\/script>`)) {
        ((e.destination = null), i++, a.splice(0, i));
        return;
      }
    }
    a.splice(0, i);
    var h = e.completedBoundaries;
    for (i = 0; i < h.length; i++)
      if (!Tt(e, t, h[i])) {
        ((e.destination = null), i++, h.splice(0, i));
        return;
      }
    h.splice(0, i);
    var g = e.partialBoundaries;
    for (i = 0; i < g.length; i++) {
      var ee = g[i];
      e: {
        ((a = e), (o = t));
        var te = ee.completedSegments;
        for (s = 0; s < te.length; s++)
          if (!Et(a, o, ee, te[s])) {
            (s++, te.splice(0, s));
            var _ = !1;
            break e;
          }
        (te.splice(0, s), (_ = !0));
      }
      if (!_) {
        ((e.destination = null), i++, g.splice(0, i));
        return;
      }
    }
    g.splice(0, i);
    var v = e.completedBoundaries;
    for (i = 0; i < v.length; i++)
      if (!Tt(e, t, v[i])) {
        ((e.destination = null), i++, v.splice(0, i));
        return;
      }
    v.splice(0, i);
  } finally {
    e.allPendingTasks === 0 &&
      e.pingedTasks.length === 0 &&
      e.clientRenderedBoundaries.length === 0 &&
      e.completedBoundaries.length === 0 &&
      t.push(null);
  }
}
function Ot(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return vt(n, e, t);
    }),
      n.clear(),
      e.destination !== null && Dt(e, e.destination));
  } catch (t) {
    (lt(e, t), ut(e, t));
  }
}
function kt() {}
function At(e, t, n, r) {
  var i = !1,
    a = null,
    o = ``,
    s = {
      push: function (e) {
        return (e !== null && (o += e), !0);
      },
      destroy: function (e) {
        ((i = !0), (a = e));
      },
    },
    c = !1;
  if (
    ((e = ot(
      e,
      Pe(n, t ? t.identifierPrefix : void 0),
      { insertionMode: 1, selectedValue: null },
      1 / 0,
      kt,
      void 0,
      function () {
        c = !0;
      },
      void 0,
      void 0,
    )),
    xt(e),
    Ot(e, r),
    e.status === 1)
  )
    ((e.status = 2), s.destroy(e.fatalError));
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      Dt(e, s);
    } catch (t) {
      (lt(e, t), ut(e, t));
    }
  }
  if (i) throw a;
  if (!c) throw Error(C(426));
  return o;
}
function A(e) {
  for (
    var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1;
    n < arguments.length;
    n++
  )
    t += `&args[]=` + encodeURIComponent(arguments[n]);
  return (
    `Minified React error #` +
    e +
    `; visit ` +
    t +
    ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function j(e, t) {
  if (t.length !== 0)
    if (512 < t.length)
      (0 < q && (e.enqueue(new Uint8Array(K.buffer, 0, q)), (K = new Uint8Array(512)), (q = 0)),
        e.enqueue(t));
    else {
      var n = K.length - q;
      (n < t.length &&
        (n === 0 ? e.enqueue(K) : (K.set(t.subarray(0, n), q), e.enqueue(K), (t = t.subarray(n))),
        (K = new Uint8Array(512)),
        (q = 0)),
        K.set(t, q),
        (q += t.length));
    }
}
function M(e, t) {
  return (j(e, t), !0);
}
function jt(e) {
  K && 0 < q && (e.enqueue(new Uint8Array(K.buffer, 0, q)), (K = null), (q = 0));
}
function N(e) {
  return Wr.encode(e);
}
function P(e) {
  return Wr.encode(e);
}
function Mt(e, t) {
  typeof e.error == `function` ? e.error(t) : e.close();
}
function Nt(e) {
  return J.call(qr, e) ? !0 : J.call(Kr, e) ? !1 : Gr.test(e) ? (qr[e] = !0) : ((Kr[e] = !0), !1);
}
function F(e, t, n, r, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
function Pt(e) {
  return e[1].toUpperCase();
}
function I(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = Zr.exec(e);
  if (t) {
    var n,
      r = ``,
      i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = `&quot;`;
          break;
        case 38:
          t = `&amp;`;
          break;
        case 39:
          t = `&#x27;`;
          break;
        case 60:
          t = `&lt;`;
          break;
        case 62:
          t = `&gt;`;
          break;
        default:
          continue;
      }
      (i !== n && (r += e.substring(i, n)), (i = n + 1), (r += t));
    }
    e = i === n ? r : r + e.substring(i, n);
  }
  return e;
}
function Ft(e, t, n, r) {
  return t + (n === `s` ? `\\u0073` : `\\u0053`) + r;
}
function It(e, t, n, r, i) {
  ((e = e === void 0 ? `` : e), (t = t === void 0 ? ti : P(`<script nonce="` + I(t) + `">`)));
  var a = [];
  if ((n !== void 0 && a.push(t, N((`` + n).replace(oi, Ft)), ni), r !== void 0))
    for (n = 0; n < r.length; n++) a.push(ri, N(I(r[n])), ai);
  if (i !== void 0) for (r = 0; r < i.length; r++) a.push(ii, N(I(i[r])), ai);
  return {
    bootstrapChunks: a,
    startInlineScript: t,
    placeholderPrefix: P(e + `P:`),
    segmentPrefix: P(e + `S:`),
    boundaryPrefix: e + `B:`,
    idPrefix: e,
    nextSuspenseID: 0,
    sentCompleteSegmentFunction: !1,
    sentCompleteBoundaryFunction: !1,
    sentClientRenderFunction: !1,
  };
}
function L(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Lt(e) {
  return L(
    e === `http://www.w3.org/2000/svg` ? 2 : e === `http://www.w3.org/1998/Math/MathML` ? 3 : 0,
    null,
  );
}
function Rt(e, t, n) {
  switch (t) {
    case `select`:
      return L(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return L(2, null);
    case `math`:
      return L(3, null);
    case `foreignObject`:
      return L(1, null);
    case `table`:
      return L(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return L(5, null);
    case `colgroup`:
      return L(7, null);
    case `tr`:
      return L(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? L(1, null) : e;
}
function zt(e, t, n, r) {
  return t === `` ? r : (r && e.push(si), e.push(N(I(t))), !0);
}
function Bt(e, t, n) {
  if (typeof n != `object`) throw Error(A(62));
  for (var r in ((t = !0), n))
    if (J.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = N(I(r));
          i = N(I((`` + i).trim()));
        } else {
          a = r;
          var o = ci.get(a);
          (o !== void 0 ||
            ((o = P(I(a.replace(Qr, `-$1`).toLowerCase().replace($r, `-ms-`)))), ci.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || J.call(Yr, r)
                  ? N(`` + i)
                  : N(i + `px`)
                : N(I((`` + i).trim()))));
        }
        t ? ((t = !1), e.push(li, a, ui, i)) : e.push(di, a, ui, i);
      }
    }
  t || e.push(pi);
}
function R(e, t, n, r) {
  switch (n) {
    case `style`:
      Bt(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) {
    if (((t = Y.hasOwnProperty(n) ? Y[n] : null), t !== null)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return;
      }
      switch (((n = N(t.attributeName)), t.type)) {
        case 3:
          r && e.push(X, n, mi);
          break;
        case 4:
          !0 === r ? e.push(X, n, mi) : !1 !== r && e.push(X, n, fi, N(I(r)), pi);
          break;
        case 5:
          isNaN(r) || e.push(X, n, fi, N(I(r)), pi);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(X, n, fi, N(I(r)), pi);
          break;
        default:
          (t.sanitizeURL && (r = `` + r), e.push(X, n, fi, N(I(r)), pi));
      }
    } else if (Nt(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)) return;
      }
      e.push(X, N(n), fi, N(I(r)), pi);
    }
  }
}
function Vt(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(A(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(A(61));
    ((t = t.__html), t != null && e.push(N(`` + t)));
  }
}
function Ht(e) {
  var t = ``;
  return (
    Ur.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function Ut(e, t, n, r) {
  e.push(z(n));
  var i,
    a = (n = null);
  for (i in t)
    if (J.call(t, i)) {
      var o = t[i];
      if (o != null)
        switch (i) {
          case `children`:
            n = o;
            break;
          case `dangerouslySetInnerHTML`:
            a = o;
            break;
          default:
            R(e, r, i, o);
        }
    }
  return (e.push(hi), Vt(e, a, n), typeof n == `string` ? (e.push(N(I(n))), null) : n);
}
function z(e) {
  var t = bi.get(e);
  if (t === void 0) {
    if (!yi.test(e)) throw Error(A(65, e));
    ((t = P(`<` + e)), bi.set(e, t));
  }
  return t;
}
function Wt(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(z(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (J.call(n, u)) {
          var s = n[u];
          if (s != null)
            switch (u) {
              case `children`:
                a = s;
                break;
              case `dangerouslySetInnerHTML`:
                o = s;
                break;
              case `defaultValue`:
              case `value`:
                break;
              default:
                R(e, r, u, s);
            }
        }
      return (e.push(hi), Vt(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(z(`option`)));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (J.call(n, a)) {
          var d = n[a];
          if (d != null)
            switch (a) {
              case `children`:
                s = d;
                break;
              case `selected`:
                l = d;
                break;
              case `dangerouslySetInnerHTML`:
                u = d;
                break;
              case `value`:
                c = d;
              default:
                R(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? Ht(s) : `` + c), ei(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(_i);
              break;
            }
        } else `` + o === n && e.push(_i);
      else l && e.push(_i);
      return (e.push(hi), Vt(e, u, s), s);
    case `textarea`:
      for (s in (e.push(z(`textarea`)), (u = o = a = null), n))
        if (J.call(n, s) && ((c = n[s]), c != null))
          switch (s) {
            case `children`:
              u = c;
              break;
            case `value`:
              a = c;
              break;
            case `defaultValue`:
              o = c;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(A(91));
            default:
              R(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(hi), u != null)) {
        if (a != null) throw Error(A(92));
        if (ei(u) && 1 < u.length) throw Error(A(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(vi),
        a !== null && e.push(N(I(`` + a))),
        null
      );
    case `input`:
      for (o in (e.push(z(`input`)), (c = u = s = a = null), n))
        if (J.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(A(399, `input`));
            case `defaultChecked`:
              c = l;
              break;
            case `defaultValue`:
              s = l;
              break;
            case `checked`:
              u = l;
              break;
            case `value`:
              a = l;
              break;
            default:
              R(e, r, o, l);
          }
      return (
        u === null ? c !== null && R(e, r, `checked`, c) : R(e, r, `checked`, u),
        a === null ? s !== null && R(e, r, `value`, s) : R(e, r, `value`, a),
        e.push(gi),
        null
      );
    case `menuitem`:
      for (var f in (e.push(z(`menuitem`)), n))
        if (J.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(A(400));
            default:
              R(e, r, f, a);
          }
      return (e.push(hi), null);
    case `title`:
      for (d in (e.push(z(`title`)), (a = null), n))
        if (J.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(A(434));
            default:
              R(e, r, d, o);
          }
      return (e.push(hi), a);
    case `listing`:
    case `pre`:
      for (c in (e.push(z(t)), (o = a = null), n))
        if (J.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              R(e, r, c, s);
          }
      if ((e.push(hi), o != null)) {
        if (a != null) throw Error(A(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(A(61));
        ((n = o.__html),
          n != null &&
            (typeof n == `string` &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(vi, N(n))
              : e.push(N(`` + n))));
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(vi),
        a
      );
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `img`:
    case `keygen`:
    case `link`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
      for (var p in (e.push(z(t)), n))
        if (J.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(A(399, t));
            default:
              R(e, r, p, a);
          }
      return (e.push(gi), null);
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return Ut(e, n, t, r);
    case `html`:
      return (i.insertionMode === 0 && e.push(xi), Ut(e, n, t, r));
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return Ut(e, n, t, r);
      for (l in (e.push(z(t)), (o = a = null), n))
        if (J.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              Bt(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              Nt(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(X, N(l), fi, N(I(s)), pi);
          }
      return (e.push(hi), Vt(e, o, a), a);
  }
}
function Gt(e, t, n) {
  if ((j(e, Di), n === null)) throw Error(A(395));
  return (j(e, n), M(e, Oi));
}
function Kt(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (j(e, Fi), j(e, t.segmentPrefix), j(e, N(r.toString(16))), M(e, Ii));
    case 2:
      return (j(e, Ri), j(e, t.segmentPrefix), j(e, N(r.toString(16))), M(e, zi));
    case 3:
      return (j(e, Vi), j(e, t.segmentPrefix), j(e, N(r.toString(16))), M(e, Hi));
    case 4:
      return (j(e, Wi), j(e, t.segmentPrefix), j(e, N(r.toString(16))), M(e, Gi));
    case 5:
      return (j(e, qi), j(e, t.segmentPrefix), j(e, N(r.toString(16))), M(e, Ji));
    case 6:
      return (j(e, Xi), j(e, t.segmentPrefix), j(e, N(r.toString(16))), M(e, Zi));
    case 7:
      return (j(e, $i), j(e, t.segmentPrefix), j(e, N(r.toString(16))), M(e, ea));
    default:
      throw Error(A(397));
  }
}
function qt(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return M(e, Li);
    case 2:
      return M(e, Bi);
    case 3:
      return M(e, Ui);
    case 4:
      return M(e, Ki);
    case 5:
      return M(e, Yi);
    case 6:
      return M(e, Qi);
    case 7:
      return M(e, ta);
    default:
      throw Error(A(397));
  }
}
function Jt(e) {
  return JSON.stringify(e).replace(ha, function (e) {
    switch (e) {
      case `<`:
        return `\\u003c`;
      case `\u2028`:
        return `\\u2028`;
      case `\u2029`:
        return `\\u2029`;
      default:
        throw Error(
          `escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`,
        );
    }
  });
}
function Yt(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case ya:
      return `Fragment`;
    case va:
      return `Portal`;
    case xa:
      return `Profiler`;
    case ba:
      return `StrictMode`;
    case Ta:
      return `Suspense`;
    case Ea:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case Ca:
        return (e.displayName || `Context`) + `.Consumer`;
      case Sa:
        return (e._context.displayName || `Context`) + `.Provider`;
      case wa:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case Da:
        return ((t = e.displayName || null), t === null ? Yt(e.type) || `Memo` : t);
      case Oa:
        ((t = e._payload), (e = e._init));
        try {
          return Yt(e(t));
        } catch {}
    }
  return null;
}
function Xt(e, t) {
  if (((e = e.contextTypes), !e)) return Pa;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function Zt(e, t) {
  if (e !== t) {
    ((e.context._currentValue = e.parentValue), (e = e.parent));
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(A(401));
    } else {
      if (n === null) throw Error(A(401));
      Zt(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function Qt(e) {
  ((e.context._currentValue = e.parentValue), (e = e.parent), e !== null && Qt(e));
}
function $t(e) {
  var t = e.parent;
  (t !== null && $t(t), (e.context._currentValue = e.value));
}
function en(e, t) {
  if (((e.context._currentValue = e.parentValue), (e = e.parent), e === null)) throw Error(A(402));
  e.depth === t.depth ? Zt(e, t) : en(e, t);
}
function tn(e, t) {
  var n = t.parent;
  if (n === null) throw Error(A(402));
  (e.depth === n.depth ? Zt(e, n) : tn(e, n), (t.context._currentValue = t.value));
}
function nn(e) {
  var t = Fa;
  t !== e &&
    (t === null
      ? $t(e)
      : e === null
        ? Qt(t)
        : t.depth === e.depth
          ? Zt(t, e)
          : t.depth > e.depth
            ? en(t, e)
            : tn(t, e),
    (Fa = e));
}
function rn(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  ((e.updater = Ia), (e.props = n), (e.state = i));
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` && ((o = o(n, i)), (i = o == null ? i : ga({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(),
      t !== e.state && Ia.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (((t = a.queue), (o = a.replace), (a.queue = null), (a.replace = !1), o && t.length === 1))
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = o ? 1 : 0; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = ga({}, a, s))) : ga(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function an(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - Ra(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - Ra(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - Ra(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function on(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((za(e) / Ba) | 0)) | 0);
}
function sn(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function cn() {
  if (Z === null) throw Error(A(321));
  return Z;
}
function ln() {
  if (0 < Ja) throw Error(A(312));
  return { memoizedState: null, queue: null, next: null };
}
function un() {
  return (
    Q === null
      ? Ua === null
        ? ((Wa = !1), (Ua = Q = ln()))
        : ((Wa = !0), (Q = Ua))
      : Q.next === null
        ? ((Wa = !1), (Q = Q.next = ln()))
        : ((Wa = !0), (Q = Q.next)),
    Q
  );
}
function dn() {
  ((Ha = Z = null), (Ga = !1), (Ua = null), (Ja = 0), (Q = qa = null));
}
function fn(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function pn(e, t, n) {
  if (((Z = cn()), (Q = un()), Wa)) {
    var r = Q.queue;
    if (((t = r.dispatch), qa !== null && ((n = qa.get(r)), n !== void 0))) {
      (qa.delete(r), (r = Q.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return ((Q.memoizedState = r), [r, t]);
    }
    return [Q.memoizedState, t];
  }
  return (
    (e = e === fn ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    (Q.memoizedState = e),
    (e = Q.queue = { last: null, dispatch: null }),
    (e = e.dispatch = hn.bind(null, Z, e)),
    [Q.memoizedState, e]
  );
}
function mn(e, t) {
  if (((Z = cn()), (Q = un()), (t = t === void 0 ? null : t), Q !== null)) {
    var n = Q.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!Va(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return ((e = e()), (Q.memoizedState = [e, t]), e);
}
function hn(e, t, n) {
  if (25 <= Ja) throw Error(A(301));
  if (e === Z)
    if (
      ((Ga = !0),
      (e = { action: n, next: null }),
      qa === null && (qa = new Map()),
      (n = qa.get(t)),
      n === void 0)
    )
      qa.set(t, e);
    else {
      for (t = n; t.next !== null; ) t = t.next;
      t.next = e;
    }
}
function gn() {
  throw Error(A(394));
}
function _n() {}
function vn(e) {
  return (console.error(e), null);
}
function yn() {}
function bn(e, t, n, r, i, a, o, s, c) {
  var l = [],
    u = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: u,
      pingedTasks: l,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? vn : i,
      onAllReady: a === void 0 ? yn : a,
      onShellReady: o === void 0 ? yn : o,
      onShellError: s === void 0 ? yn : s,
      onFatalError: c === void 0 ? yn : c,
    }),
    (n = Sn(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = xn(t, e, null, n, u, Pa, null, La)),
    l.push(e),
    t
  );
}
function xn(e, t, n, r, i, a, o, s) {
  (e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++);
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      (t.push(c), t.length === 1 && Fn(e));
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: a,
    context: o,
    treeContext: s,
  };
  return (i.add(c), c);
}
function Sn(e, t, n, r, i, a) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: a,
  };
}
function Cn(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`,
    );
  return e;
}
function wn(e, t) {
  var n = e.onShellError;
  (n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), Mt(e.destination, t)));
}
function Tn(e, t, n, r, i) {
  for (Z = {}, Ha = t, Ka = 0, e = n(r, i); Ga; )
    ((Ga = !1), (Ka = 0), (Ja += 1), (Q = null), (e = n(r, i)));
  return (dn(), e);
}
function En(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(A(108, Yt(r) || `Unknown`, s));
      r = ga({}, o, n);
    }
    ((t.legacyContext = r), B(e, t, i), (t.legacyContext = o));
  } else B(e, t, i);
}
function Dn(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = ga({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function On(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = Xt(n, t.legacyContext);
      var a = n.contextType;
      ((a = new n(r, typeof a == `object` && a ? a._currentValue : i)),
        rn(a, n, r, i),
        En(e, t, a, n));
    } else {
      ((a = Xt(n, t.legacyContext)), (i = Tn(e, t, n, r, a)));
      var o = Ka !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0)
        (rn(i, n, r, a), En(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = an(r, 1, 0)));
        try {
          B(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else B(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case ja:
        case Aa:
        case ba:
        case xa:
        case ya:
          B(e, t, r.children);
          return;
        case Ea:
          B(e, t, r.children);
          return;
        case ka:
          throw Error(A(343));
        case Ta:
          e: {
            ((n = t.blockedBoundary),
              (i = t.blockedSegment),
              (a = r.fallback),
              (r = r.children),
              (o = new Set()));
            var s = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: o,
                errorDigest: null,
              },
              c = Sn(e, i.chunks.length, s, i.formatContext, !1, !1);
            (i.children.push(c), (i.lastPushedText = !1));
            var l = Sn(e, 0, null, i.formatContext, !1, !1);
            ((l.parentFlushed = !0), (t.blockedBoundary = s), (t.blockedSegment = l));
            try {
              if (
                (An(e, t, r),
                l.lastPushedText && l.textEmbedded && l.chunks.push(si),
                (l.status = 1),
                Nn(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              ((l.status = 4), (s.forceClientRender = !0), (s.errorDigest = Cn(e, t)));
            } finally {
              ((t.blockedBoundary = n), (t.blockedSegment = i));
            }
            ((t = xn(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t));
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case wa:
            if (((r = Tn(e, t, n.render, r, i)), Ka !== 0)) {
              ((n = t.treeContext), (t.treeContext = an(n, 1, 0)));
              try {
                B(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else B(e, t, r);
            return;
          case Da:
            ((n = n.type), (r = Dn(n, r)), On(e, t, n, r, i));
            return;
          case Sa:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue),
              (n._currentValue = r),
              (o = Fa),
              (Fa = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              B(e, t, i),
              (e = Fa),
              e === null)
            )
              throw Error(A(403));
            ((r = e.parentValue),
              (e.context._currentValue = r === Ma ? e.context._defaultValue : r),
              (e = Fa = e.parent),
              (t.context = e));
            return;
          case Ca:
            ((r = r.children), (r = r(n._currentValue)), B(e, t, r));
            return;
          case Oa:
            ((i = n._init), (n = i(n._payload)), (r = Dn(n, r)), On(e, t, n, r, void 0));
            return;
        }
      throw Error(A(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = Wt(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = Rt(o, n, r)),
      An(e, t, a),
      (i.formatContext = o),
      n)
    ) {
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `input`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        break;
      default:
        i.chunks.push(Si, N(n), Ci);
    }
    i.lastPushedText = !1;
  }
}
function B(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case _a:
        On(e, t, n.type, n.props, n.ref);
        return;
      case va:
        throw Error(A(257));
      case Oa:
        var r = n._init;
        ((n = r(n._payload)), B(e, t, n));
        return;
    }
    if (ei(n)) {
      kn(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (Na && n[Na]) || n[`@@iterator`]), (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do (i.push(n.value), (n = r.next()));
        while (!n.done);
        kn(e, t, i);
      }
      return;
    }
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        A(31, e === `[object Object]` ? `object with keys {` + Object.keys(n).join(`, `) + `}` : e),
      )
    );
  }
  typeof n == `string`
    ? ((r = t.blockedSegment),
      (r.lastPushedText = zt(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = zt(t.blockedSegment.chunks, `` + n, e.responseState, r.lastPushedText)));
}
function kn(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = an(a, r, i);
    try {
      An(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function An(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return B(e, t, n);
  } catch (c) {
    if ((dn(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        nn(a),
        c
      );
    n = c;
    var o = t.blockedSegment,
      s = Sn(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    (o.children.push(s),
      (o.lastPushedText = !1),
      (e = xn(
        e,
        t.node,
        t.blockedBoundary,
        s,
        t.abortSet,
        t.legacyContext,
        t.context,
        t.treeContext,
      ).ping),
      n.then(e, e),
      (t.blockedSegment.formatContext = r),
      (t.legacyContext = i),
      (t.context = a),
      nn(a));
  }
}
function jn(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), Pn(this, t, e));
}
function Mn(e, t, n) {
  var r = e.blockedBoundary;
  ((e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 && ((t.status = 2), t.destination !== null && t.destination.close()))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(A(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return Mn(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function Nn(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && Nn(e, n));
  } else e.completedSegments.push(t);
}
function Pn(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(A(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 && ((e.onShellError = yn), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && Nn(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(jn, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (Nn(t, n),
            t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function Fn(e) {
  if (e.status !== 2) {
    var t = Fa,
      n = Za.current;
    Za.current = Ya;
    var r = Xa;
    Xa = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          nn(o.context);
          try {
            (B(s, o, o.node),
              c.lastPushedText && c.textEmbedded && c.chunks.push(si),
              o.abortSet.delete(o),
              (c.status = 1),
              Pn(s, o.blockedBoundary, c));
          } catch (e) {
            if ((dn(), typeof e == `object` && e && typeof e.then == `function`)) {
              var l = o.ping;
              e.then(l, l);
            } else {
              (o.abortSet.delete(o), (c.status = 4));
              var u = o.blockedBoundary,
                d = e,
                f = Cn(s, d);
              if (
                (u === null
                  ? wn(s, d)
                  : (u.pendingTasks--,
                    u.forceClientRender ||
                      ((u.forceClientRender = !0),
                      (u.errorDigest = f),
                      u.parentFlushed && s.clientRenderedBoundaries.push(u))),
                s.allPendingTasks--,
                s.allPendingTasks === 0)
              ) {
                var p = s.onAllReady;
                p();
              }
            }
          }
        }
      }
      (a.splice(0, i), e.destination !== null && Vn(e, e.destination));
    } catch (t) {
      (Cn(e, t), wn(e, t));
    } finally {
      ((Xa = r), (Za.current = n), n === Ya && nn(t));
    }
  }
}
function In(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        j(t, wi),
        j(t, e.placeholderPrefix),
        (e = N(r.toString(16))),
        j(t, e),
        M(t, Ti)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) j(t, r[a]);
        i = Ln(e, t, i);
      }
      for (; a < r.length - 1; a++) j(t, r[a]);
      return (a < r.length && (i = M(t, r[a])), i);
    default:
      throw Error(A(390));
  }
}
function Ln(e, t, n) {
  var r = n.boundary;
  if (r === null) return In(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    ((r = r.errorDigest),
      M(t, ki),
      j(t, ji),
      r && (j(t, Ni), j(t, N(I(r))), j(t, Mi)),
      M(t, Pi),
      In(e, t, n));
  else if (0 < r.pendingTasks) {
    ((r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r));
    var i = e.responseState,
      a = i.nextSuspenseID++;
    ((i = P(i.boundaryPrefix + a.toString(16))),
      (r = r.id = i),
      Gt(t, e.responseState, r),
      In(e, t, n));
  } else if (r.byteSize > e.progressiveChunkSize)
    ((r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      Gt(t, e.responseState, r.id),
      In(e, t, n));
  else {
    if ((M(t, Ei), (n = r.completedSegments), n.length !== 1)) throw Error(A(391));
    Ln(e, t, n[0]);
  }
  return M(t, Ai);
}
function Rn(e, t, n) {
  return (Kt(t, e.responseState, n.formatContext, n.id), Ln(e, t, n), qt(t, n.formatContext));
}
function zn(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) Bn(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    j(t, e.startInlineScript),
    e.sentCompleteBoundaryFunction ? j(t, sa) : ((e.sentCompleteBoundaryFunction = !0), j(t, oa)),
    r === null)
  )
    throw Error(A(395));
  return ((n = N(n.toString(16))), j(t, r), j(t, ca), j(t, e.segmentPrefix), j(t, n), M(t, la));
}
function Bn(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(A(392));
    return Rn(e, t, r);
  }
  return (
    Rn(e, t, r),
    (e = e.responseState),
    j(t, e.startInlineScript),
    e.sentCompleteSegmentFunction ? j(t, ra) : ((e.sentCompleteSegmentFunction = !0), j(t, na)),
    j(t, e.segmentPrefix),
    (i = N(i.toString(16))),
    j(t, i),
    j(t, ia),
    j(t, e.placeholderPrefix),
    j(t, i),
    M(t, aa)
  );
}
function Vn(e, t) {
  ((K = new Uint8Array(512)), (q = 0));
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (Ln(e, t, n), (e.completedRootSegment = null));
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) j(t, r[n]);
      n < r.length && M(t, r[n]);
    }
    var i,
      a = e.clientRenderedBoundaries;
    for (i = 0; i < a.length; i++) {
      var o = a[i];
      r = t;
      var s = e.responseState,
        c = o.id,
        l = o.errorDigest,
        u = o.errorMessage,
        d = o.errorComponentStack;
      if (
        (j(r, s.startInlineScript),
        s.sentClientRenderFunction ? j(r, da) : ((s.sentClientRenderFunction = !0), j(r, ua)),
        c === null)
      )
        throw Error(A(395));
      if (
        (j(r, c),
        j(r, fa),
        (l || u || d) && (j(r, ma), j(r, N(Jt(l || ``)))),
        (u || d) && (j(r, ma), j(r, N(Jt(u || ``)))),
        d && (j(r, ma), j(r, N(Jt(d)))),
        !M(r, pa))
      ) {
        ((e.destination = null), i++, a.splice(0, i));
        return;
      }
    }
    a.splice(0, i);
    var f = e.completedBoundaries;
    for (i = 0; i < f.length; i++)
      if (!zn(e, t, f[i])) {
        ((e.destination = null), i++, f.splice(0, i));
        return;
      }
    (f.splice(0, i), jt(t), (K = new Uint8Array(512)), (q = 0));
    var p = e.partialBoundaries;
    for (i = 0; i < p.length; i++) {
      var m = p[i];
      e: {
        ((a = e), (o = t));
        var h = m.completedSegments;
        for (s = 0; s < h.length; s++)
          if (!Bn(a, o, m, h[s])) {
            (s++, h.splice(0, s));
            var g = !1;
            break e;
          }
        (h.splice(0, s), (g = !0));
      }
      if (!g) {
        ((e.destination = null), i++, p.splice(0, i));
        return;
      }
    }
    p.splice(0, i);
    var ee = e.completedBoundaries;
    for (i = 0; i < ee.length; i++)
      if (!zn(e, t, ee[i])) {
        ((e.destination = null), i++, ee.splice(0, i));
        return;
      }
    ee.splice(0, i);
  } finally {
    (jt(t),
      e.allPendingTasks === 0 &&
        e.pingedTasks.length === 0 &&
        e.clientRenderedBoundaries.length === 0 &&
        e.completedBoundaries.length === 0 &&
        t.close());
  }
}
function Hn(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return Mn(n, e, t);
    }),
      n.clear(),
      e.destination !== null && Vn(e, e.destination));
  } catch (t) {
    (Cn(e, t), wn(e, t));
  }
}
var Un,
  Wn,
  Gn,
  V,
  Kn,
  qn,
  Jn,
  H,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  U,
  Mr,
  Nr,
  W,
  Pr,
  Fr,
  Ir,
  G,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  K,
  q,
  Wr,
  J,
  Gr,
  Kr,
  qr,
  Y,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  X,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba,
  Va,
  Z,
  Ha,
  Ua,
  Q,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  $,
  Qa,
  $a,
  eo,
  to = e(() => {
    (n(),
      (Un = `default` in l ? u : l),
      (Wn = {}),
      (Gn = Un),
      (V = Object.prototype.hasOwnProperty),
      (Kn =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (qn = {}),
      (Jn = {}),
      (H = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          H[e] = new w(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        H[t] = new w(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (e) {
        H[e] = new w(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(
        function (e) {
          H[e] = new w(e, 2, !1, e, null, !1, !1);
        },
      ),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          H[e] = new w(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        H[e] = new w(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        H[e] = new w(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        H[e] = new w(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        H[e] = new w(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (Yn = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(Yn, Ce);
          H[t] = new w(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(Yn, Ce);
          H[t] = new w(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(Yn, Ce);
        H[t] = new w(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        H[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (H.xlinkHref = new w(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1,
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        H[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (Xn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      }),
      (Zn = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(Xn).forEach(function (e) {
        Zn.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xn[t] = Xn[e]));
        });
      }),
      (Qn = /["'&<>]/),
      ($n = /([A-Z])/g),
      (er = /^ms-/),
      (tr = Array.isArray),
      (nr = new Map()),
      (rr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (ir = new Map()),
      (ar = /[<\u2028\u2029]/g),
      (or = Object.assign),
      (sr = Symbol.for(`react.element`)),
      (cr = Symbol.for(`react.portal`)),
      (lr = Symbol.for(`react.fragment`)),
      (ur = Symbol.for(`react.strict_mode`)),
      (dr = Symbol.for(`react.profiler`)),
      (fr = Symbol.for(`react.provider`)),
      (pr = Symbol.for(`react.context`)),
      (mr = Symbol.for(`react.forward_ref`)),
      (hr = Symbol.for(`react.suspense`)),
      (gr = Symbol.for(`react.suspense_list`)),
      (_r = Symbol.for(`react.memo`)),
      (vr = Symbol.for(`react.lazy`)),
      (yr = Symbol.for(`react.scope`)),
      (br = Symbol.for(`react.debug_trace_mode`)),
      (xr = Symbol.for(`react.legacy_hidden`)),
      (Sr = Symbol.for(`react.default_value`)),
      (Cr = Symbol.iterator),
      (wr = {}),
      (Tr = null),
      (Er = {
        isMounted: function () {
          return !1;
        },
        enqueueSetState: function (e, t) {
          ((e = e._reactInternals), e.queue !== null && e.queue.push(t));
        },
        enqueueReplaceState: function (e, t) {
          ((e = e._reactInternals), (e.replace = !0), (e.queue = [t]));
        },
        enqueueForceUpdate: function () {},
      }),
      (Dr = { id: 1, overflow: `` }),
      (Or = Math.clz32 ? Math.clz32 : Ke),
      (kr = Math.log),
      (Ar = Math.LN2),
      (jr = typeof Object.is == `function` ? Object.is : qe),
      (U = null),
      (Mr = null),
      (Nr = null),
      (W = null),
      (Pr = !1),
      (Fr = !1),
      (Ir = 0),
      (G = null),
      (Lr = 0),
      (Rr = {
        readContext: function (e) {
          return e._currentValue2;
        },
        useContext: function (e) {
          return (Je(), e._currentValue2);
        },
        useMemo: et,
        useReducer: $e,
        useRef: function (e) {
          ((U = Je()), (W = Xe()));
          var t = W.memoizedState;
          return t === null ? ((e = { current: e }), (W.memoizedState = e)) : t;
        },
        useState: function (e) {
          return $e(Qe, e);
        },
        useInsertionEffect: rt,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return et(function () {
            return e;
          }, t);
        },
        useImperativeHandle: rt,
        useEffect: rt,
        useDebugValue: rt,
        useDeferredValue: function (e) {
          return (Je(), e);
        },
        useTransition: function () {
          return (Je(), [!1, nt]);
        },
        useId: function () {
          var e = Mr.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - Or(e) - 1))).toString(32) + t));
          var n = zr;
          if (n === null) throw Error(C(404));
          return (
            (t = Ir++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return (Je(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(C(407));
          return n();
        },
      }),
      (zr = null),
      (Br = Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher),
      (Wn.renderToNodeStream = function () {
        throw Error(C(207));
      }),
      (Wn.renderToStaticMarkup = function (e, t) {
        return At(
          e,
          t,
          !0,
          `The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`,
        );
      }),
      (Wn.renderToStaticNodeStream = function () {
        throw Error(C(208));
      }),
      (Wn.renderToString = function (e, t) {
        return At(
          e,
          t,
          !1,
          `The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`,
        );
      }),
      (Wn.version = `18.2.0`),
      (Vr = `default` in l ? u : l),
      (Hr = {}),
      (Ur = Vr),
      (K = null),
      (q = 0),
      (Wr = new TextEncoder()),
      (J = Object.prototype.hasOwnProperty),
      (Gr =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (Kr = {}),
      (qr = {}),
      (Y = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          Y[e] = new F(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        Y[t] = new F(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (e) {
        Y[e] = new F(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(
        function (e) {
          Y[e] = new F(e, 2, !1, e, null, !1, !1);
        },
      ),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          Y[e] = new F(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        Y[e] = new F(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        Y[e] = new F(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        Y[e] = new F(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        Y[e] = new F(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (Jr = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(Jr, Pt);
          Y[t] = new F(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(Jr, Pt);
          Y[t] = new F(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(Jr, Pt);
        Y[t] = new F(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        Y[e] = new F(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (Y.xlinkHref = new F(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1,
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        Y[e] = new F(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (Yr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      }),
      (Xr = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(Yr).forEach(function (e) {
        Xr.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yr[t] = Yr[e]));
        });
      }),
      (Zr = /["'&<>]/),
      (Qr = /([A-Z])/g),
      ($r = /^ms-/),
      (ei = Array.isArray),
      (ti = P(`<script>`)),
      (ni = P(`<\/script>`)),
      (ri = P(`<script src="`)),
      (ii = P(`<script type="module" src="`)),
      (ai = P(`" async=""><\/script>`)),
      (oi = /(<\/|<)(s)(cript)/gi),
      (si = P(`<!-- -->`)),
      (ci = new Map()),
      (li = P(` style="`)),
      (ui = P(`:`)),
      (di = P(`;`)),
      (X = P(` `)),
      (fi = P(`="`)),
      (pi = P(`"`)),
      (mi = P(`=""`)),
      (hi = P(`>`)),
      (gi = P(`/>`)),
      (_i = P(` selected=""`)),
      (vi = P(`
`)),
      (yi = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (bi = new Map()),
      (xi = P(`<!DOCTYPE html>`)),
      (Si = P(`</`)),
      (Ci = P(`>`)),
      (wi = P(`<template id="`)),
      (Ti = P(`"></template>`)),
      (Ei = P(`<!--$-->`)),
      (Di = P(`<!--$?--><template id="`)),
      (Oi = P(`"></template>`)),
      (ki = P(`<!--$!-->`)),
      (Ai = P(`<!--/$-->`)),
      (ji = P(`<template`)),
      (Mi = P(`"`)),
      (Ni = P(` data-dgst="`)),
      P(` data-msg="`),
      P(` data-stck="`),
      (Pi = P(`></template>`)),
      (Fi = P(`<div hidden id="`)),
      (Ii = P(`">`)),
      (Li = P(`</div>`)),
      (Ri = P(`<svg aria-hidden="true" style="display:none" id="`)),
      (zi = P(`">`)),
      (Bi = P(`</svg>`)),
      (Vi = P(`<math aria-hidden="true" style="display:none" id="`)),
      (Hi = P(`">`)),
      (Ui = P(`</math>`)),
      (Wi = P(`<table hidden id="`)),
      (Gi = P(`">`)),
      (Ki = P(`</table>`)),
      (qi = P(`<table hidden><tbody id="`)),
      (Ji = P(`">`)),
      (Yi = P(`</tbody></table>`)),
      (Xi = P(`<table hidden><tr id="`)),
      (Zi = P(`">`)),
      (Qi = P(`</tr></table>`)),
      ($i = P(`<table hidden><colgroup id="`)),
      (ea = P(`">`)),
      (ta = P(`</colgroup></table>`)),
      (na = P(
        `function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`,
      )),
      (ra = P(`$RS("`)),
      (ia = P(`","`)),
      (aa = P(`")<\/script>`)),
      (oa = P(
        `function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`,
      )),
      (sa = P(`$RC("`)),
      (ca = P(`","`)),
      (la = P(`")<\/script>`)),
      (ua = P(
        `function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`,
      )),
      (da = P(`$RX("`)),
      (fa = P(`"`)),
      (pa = P(`)<\/script>`)),
      (ma = P(`,`)),
      (ha = /[<\u2028\u2029]/g),
      (ga = Object.assign),
      (_a = Symbol.for(`react.element`)),
      (va = Symbol.for(`react.portal`)),
      (ya = Symbol.for(`react.fragment`)),
      (ba = Symbol.for(`react.strict_mode`)),
      (xa = Symbol.for(`react.profiler`)),
      (Sa = Symbol.for(`react.provider`)),
      (Ca = Symbol.for(`react.context`)),
      (wa = Symbol.for(`react.forward_ref`)),
      (Ta = Symbol.for(`react.suspense`)),
      (Ea = Symbol.for(`react.suspense_list`)),
      (Da = Symbol.for(`react.memo`)),
      (Oa = Symbol.for(`react.lazy`)),
      (ka = Symbol.for(`react.scope`)),
      (Aa = Symbol.for(`react.debug_trace_mode`)),
      (ja = Symbol.for(`react.legacy_hidden`)),
      (Ma = Symbol.for(`react.default_value`)),
      (Na = Symbol.iterator),
      (Pa = {}),
      (Fa = null),
      (Ia = {
        isMounted: function () {
          return !1;
        },
        enqueueSetState: function (e, t) {
          ((e = e._reactInternals), e.queue !== null && e.queue.push(t));
        },
        enqueueReplaceState: function (e, t) {
          ((e = e._reactInternals), (e.replace = !0), (e.queue = [t]));
        },
        enqueueForceUpdate: function () {},
      }),
      (La = { id: 1, overflow: `` }),
      (Ra = Math.clz32 ? Math.clz32 : on),
      (za = Math.log),
      (Ba = Math.LN2),
      (Va = typeof Object.is == `function` ? Object.is : sn),
      (Z = null),
      (Ha = null),
      (Ua = null),
      (Q = null),
      (Wa = !1),
      (Ga = !1),
      (Ka = 0),
      (qa = null),
      (Ja = 0),
      (Ya = {
        readContext: function (e) {
          return e._currentValue;
        },
        useContext: function (e) {
          return (cn(), e._currentValue);
        },
        useMemo: mn,
        useReducer: pn,
        useRef: function (e) {
          ((Z = cn()), (Q = un()));
          var t = Q.memoizedState;
          return t === null ? ((e = { current: e }), (Q.memoizedState = e)) : t;
        },
        useState: function (e) {
          return pn(fn, e);
        },
        useInsertionEffect: _n,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return mn(function () {
            return e;
          }, t);
        },
        useImperativeHandle: _n,
        useEffect: _n,
        useDebugValue: _n,
        useDeferredValue: function (e) {
          return (cn(), e);
        },
        useTransition: function () {
          return (cn(), [!1, gn]);
        },
        useId: function () {
          var e = Ha.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - Ra(e) - 1))).toString(32) + t));
          var n = Xa;
          if (n === null) throw Error(A(404));
          return (
            (t = Ka++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return (cn(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(A(407));
          return n();
        },
      }),
      (Xa = null),
      (Za = Ur.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher),
      (Hr.renderToReadableStream = function (e, t) {
        return new Promise(function (n, r) {
          var i,
            a,
            o = new Promise(function (e, t) {
              ((a = e), (i = t));
            }),
            s = bn(
              e,
              It(
                t ? t.identifierPrefix : void 0,
                t ? t.nonce : void 0,
                t ? t.bootstrapScriptContent : void 0,
                t ? t.bootstrapScripts : void 0,
                t ? t.bootstrapModules : void 0,
              ),
              Lt(t ? t.namespaceURI : void 0),
              t ? t.progressiveChunkSize : void 0,
              t ? t.onError : void 0,
              a,
              function () {
                var e = new ReadableStream(
                  {
                    type: `bytes`,
                    pull: function (e) {
                      if (s.status === 1) ((s.status = 2), Mt(e, s.fatalError));
                      else if (s.status !== 2 && s.destination === null) {
                        s.destination = e;
                        try {
                          Vn(s, e);
                        } catch (e) {
                          (Cn(s, e), wn(s, e));
                        }
                      }
                    },
                    cancel: function () {
                      Hn(s);
                    },
                  },
                  { highWaterMark: 0 },
                );
                ((e.allReady = o), n(e));
              },
              function (e) {
                (o.catch(function () {}), r(e));
              },
              i,
            );
          if (t && t.signal) {
            var c = t.signal,
              l = function () {
                (Hn(s, c.reason), c.removeEventListener(`abort`, l));
              };
            c.addEventListener(`abort`, l);
          }
          Fn(s);
        });
      }),
      (Hr.version = `18.2.0`),
      ($ = {}),
      (Qa = Wn),
      ($a = Hr),
      ($.version = Qa.version),
      ($.renderToString = Qa.renderToString),
      ($.renderToStaticMarkup = Qa.renderToStaticMarkup),
      ($.renderToNodeStream = Qa.renderToNodeStream),
      ($.renderToStaticNodeStream = Qa.renderToStaticNodeStream),
      ($.renderToReadableStream = $a.renderToReadableStream),
      $.version,
      $.renderToString,
      $.renderToStaticMarkup,
      $.renderToNodeStream,
      $.renderToStaticNodeStream,
      (eo = $.renderToReadableStream));
  });
function no() {
  if (typeof document > `u` || document.getElementById(`sc3d-fonts`)) return;
  let e = document.createElement(`link`);
  ((e.id = `sc3d-fonts`),
    (e.rel = `stylesheet`),
    (e.href = `https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap`),
    document.head.appendChild(e));
}
function ro({ card: e, bg: t }) {
  let [n, r] = s(!1),
    i = !!e.image;
  return m(`div`, {
    onMouseEnter: () => r(!0),
    onMouseLeave: () => r(!1),
    style: {
      position: `relative`,
      width: `100%`,
      height: `100%`,
      borderRadius: 18,
      display: `flex`,
      flexDirection: `column`,
      cursor: `pointer`,
      overflow: `hidden`,
      background: t,
      backdropFilter: `blur(24px)`,
      WebkitBackdropFilter: `blur(24px)`,
      boxShadow: n
        ? `0 10px 40px rgba(0,0,0,0.6), 0 0 20px 2px ${e.accentColor}80, 0 0 50px 5px ${e.accentColor}50`
        : `0 8px 32px rgba(0,0,0,0.4)`,
      border: n ? `2px solid ${e.accentColor}` : `1px solid rgba(255,255,255,0.07)`,
      transform: n ? `translateY(-12px) scale(1.03)` : `translateY(0) scale(1)`,
      transition: `transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease, border 0.4s ease`,
      fontFamily: `'DM Sans', sans-serif`,
    },
    children: [
      m(`div`, {
        style: { position: `relative`, width: `100%`, flex: 1, overflow: `hidden`, minHeight: 180 },
        children: [
          i
            ? d(`img`, {
                src: e.image,
                alt: e.title,
                style: {
                  width: `100%`,
                  height: `100%`,
                  objectFit: `cover`,
                  display: `block`,
                  transform: n ? `scale(1.08)` : `scale(1)`,
                  transition: `transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)`,
                },
              })
            : d(`div`, {
                style: {
                  width: `100%`,
                  height: `100%`,
                  background: `linear-gradient(135deg, ${e.accentColor}40 0%, ${e.accentColor}15 50%, transparent 100%)`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                },
                children: d(`div`, {
                  style: {
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: `${e.accentColor}25`,
                    border: `1px solid ${e.accentColor}30`,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    fontSize: 24,
                    color: e.accentColor,
                  },
                  children: `✦`,
                }),
              }),
          d(`div`, {
            style: {
              position: `absolute`,
              bottom: 0,
              left: 0,
              right: 0,
              height: 50,
              background: `linear-gradient(transparent, ${t.includes(`rgba`) ? `rgba(10,10,20,0.85)` : t})`,
              pointerEvents: `none`,
            },
          }),
          e.tag &&
            d(`div`, {
              style: {
                position: `absolute`,
                top: 12,
                left: 12,
                fontSize: 10,
                fontWeight: 700,
                textTransform: `uppercase`,
                letterSpacing: `0.1em`,
                padding: `4px 10px`,
                borderRadius: 6,
                background: `${e.accentColor}dd`,
                color: `#fff`,
              },
              children: e.tag,
            }),
        ],
      }),
      m(`div`, {
        style: {
          position: `relative`,
          zIndex: 3,
          padding: 20,
          display: `flex`,
          flexDirection: `column`,
          flexShrink: 0,
        },
        children: [
          d(`h3`, {
            style: {
              fontFamily: `'Syne', sans-serif`,
              fontWeight: 700,
              fontSize: 19,
              color: `#fff`,
              margin: `0 0 6px`,
              letterSpacing: `-0.01em`,
              lineHeight: 1.2,
              textWrap: `balance`,
            },
            children: e.title,
          }),
          d(`p`, {
            style: {
              fontSize: 13,
              lineHeight: 1.6,
              margin: 0,
              color: n ? `rgba(255,255,255,0.72)` : `rgba(255,255,255,0.45)`,
              transition: `color 0.4s ease`,
              textWrap: `pretty`,
            },
            children: e.description,
          }),
          d(`a`, {
            href: e.ctaUrl,
            style: {
              marginTop: 14,
              display: `inline-flex`,
              alignItems: `center`,
              fontSize: 13,
              fontWeight: 600,
              color: e.accentColor,
              textDecoration: `none`,
              opacity: n ? 1 : 0.6,
              transform: n ? `translateX(4px)` : `translateX(0)`,
              transition: `all 0.35s ease 0.1s`,
            },
            children: e.ctaText,
          }),
        ],
      }),
    ],
  });
}
function io({ card: e, bg: t }) {
  let n = !!e.image;
  return m(`div`, {
    style: {
      borderRadius: 18,
      overflow: `hidden`,
      background: t,
      backdropFilter: `blur(24px)`,
      boxShadow: `0 8px 32px rgba(0,0,0,0.4)`,
      border: `1px solid rgba(255,255,255,0.07)`,
      fontFamily: `'DM Sans', sans-serif`,
    },
    children: [
      d(`div`, {
        style: { width: `100%`, height: 160, overflow: `hidden` },
        children: n
          ? d(`img`, {
              src: e.image,
              alt: e.title,
              style: { width: `100%`, height: `100%`, objectFit: `cover`, display: `block` },
            })
          : d(`div`, {
              style: {
                width: `100%`,
                height: `100%`,
                background: `linear-gradient(135deg, ${e.accentColor}40, ${e.accentColor}10)`,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
              },
              children: d(`div`, { style: { fontSize: 28, color: e.accentColor }, children: `✦` }),
            }),
      }),
      m(`div`, {
        style: { padding: `14px 18px 18px` },
        children: [
          e.tag &&
            d(`span`, {
              style: {
                display: `inline-block`,
                fontSize: 10,
                fontWeight: 700,
                textTransform: `uppercase`,
                letterSpacing: `0.1em`,
                padding: `3px 8px`,
                borderRadius: 5,
                marginBottom: 10,
                background: `${e.accentColor}22`,
                color: e.accentColor,
              },
              children: e.tag,
            }),
          d(`h3`, {
            style: {
              fontFamily: `'Syne', sans-serif`,
              fontWeight: 700,
              fontSize: 17,
              color: `#fff`,
              margin: `0 0 6px`,
              textWrap: `balance`,
            },
            children: e.title,
          }),
          d(`p`, {
            style: {
              fontSize: 13,
              color: `rgba(255,255,255,0.55)`,
              lineHeight: 1.6,
              margin: 0,
              textWrap: `pretty`,
            },
            children: e.description,
          }),
          d(`a`, {
            href: e.ctaUrl,
            style: {
              display: `inline-block`,
              marginTop: 12,
              fontSize: 13,
              fontWeight: 600,
              color: e.accentColor,
              textDecoration: `none`,
            },
            children: e.ctaText,
          }),
        ],
      }),
    ],
  });
}
function ao({ direction: e, onClick: t }) {
  let [n, r] = s(!1);
  return d(`button`, {
    onClick: t,
    onMouseEnter: () => r(!0),
    onMouseLeave: () => r(!1),
    style: {
      position: `absolute`,
      top: `50%`,
      zIndex: 20,
      [e === `left` ? `left` : `right`]: 12,
      transform: `translateY(-50%)`,
      width: 40,
      height: 40,
      borderRadius: `50%`,
      background: n ? `rgba(255,255,255,0.15)` : `rgba(255,255,255,0.06)`,
      border: `1px solid rgba(255,255,255,0.1)`,
      color: `#fff`,
      cursor: `pointer`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      transition: `background 0.3s`,
      backdropFilter: `blur(12px)`,
    },
    children: d(`svg`, {
      width: `16`,
      height: `16`,
      viewBox: `0 0 18 18`,
      fill: `none`,
      children: d(`path`, {
        d: e === `left` ? `M11 4L6 9L11 14` : `M7 4L12 9L7 14`,
        stroke: `currentColor`,
        strokeWidth: `1.5`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
    }),
  });
}
function oo(e) {
  let {
      cards: t = so,
      backgroundColor: n = `#06060f`,
      cardBackground: r = `rgba(10, 10, 20, 0.85)`,
      cardDepth: i = 400,
      autoPlaySpeed: o = 4e3,
      style: l,
    } = e,
    [u, f] = s(0),
    [p, h] = s(!1),
    [g, ee] = s(!1),
    [te, _] = s(0),
    v = Math.min(t.length, 8),
    y = 360 / v;
  (a(() => {
    no();
  }, []),
    a(() => {
      let e = () => ee(c.innerWidth < 768);
      return (e(), c.addEventListener(`resize`, e), () => c.removeEventListener(`resize`, e));
    }, []),
    a(() => {
      if (p || o <= 0) return;
      let e = setInterval(() => {
        f((e) => {
          let t = (e + 1) % v;
          return (_((e) => e - y), t);
        });
      }, o);
      return () => clearInterval(e);
    }, [p, o, v, y]));
  let ne = (e) => {
      f((t) => {
        let n = e - t;
        return (n > v / 2 && (n -= v), n < -v / 2 && (n += v), _((e) => e - n * y), e);
      });
    },
    re = () => {
      f((e) => (_((e) => e + y), (e - 1 + v) % v));
    },
    ie = () => {
      f((e) => (_((e) => e - y), (e + 1) % v));
    },
    ae = Array.from({ length: v }, (e, t) => t * y);
  return m(`div`, {
    style: {
      position: `relative`,
      width: `100%`,
      minHeight: 580,
      background: n,
      overflow: `hidden`,
      fontFamily: `'DM Sans', sans-serif`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      padding: `32px 20px`,
      ...l,
    },
    onMouseEnter: () => h(!0),
    onMouseLeave: () => h(!1),
    children: [
      d(`div`, {
        style: {
          position: `absolute`,
          inset: 0,
          opacity: 0.03,
          pointerEvents: `none`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: `128px 128px`,
        },
      }),
      d(`div`, {
        style: {
          position: `absolute`,
          inset: 0,
          opacity: 0.04,
          pointerEvents: `none`,
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        },
      }),
      g
        ? d(`div`, {
            style: {
              display: `flex`,
              flexDirection: `column`,
              gap: 16,
              width: `100%`,
              maxWidth: 380,
            },
            children: t.slice(0, v).map((e, t) => d(io, { card: e, bg: r }, t)),
          })
        : m(`div`, {
            style: { position: `relative`, width: `100%`, maxWidth: 1100 },
            children: [
              m(`div`, {
                style: {
                  position: `relative`,
                  width: `100%`,
                  height: 480,
                  perspective: 1200,
                  perspectiveOrigin: `50% 50%`,
                },
                children: [
                  d(b.div, {
                    animate: { rotateY: te },
                    transition: { type: `spring`, stiffness: 45, damping: 16, mass: 1.2 },
                    style: {
                      position: `absolute`,
                      width: 300,
                      height: 440,
                      left: `50%`,
                      top: `50%`,
                      marginLeft: -150,
                      marginTop: -220,
                      transformStyle: `preserve-3d`,
                    },
                    children: t.slice(0, v).map((e, t) =>
                      d(
                        `div`,
                        {
                          style: {
                            position: `absolute`,
                            width: 300,
                            height: 440,
                            top: 0,
                            left: 0,
                            transform: `rotateY(${ae[t]}deg) translateZ(${i}px)`,
                            backfaceVisibility: `hidden`,
                          },
                          children: d(ro, { card: e, bg: r }),
                        },
                        t,
                      ),
                    ),
                  }),
                  d(ao, { direction: `left`, onClick: re }),
                  d(ao, { direction: `right`, onClick: ie }),
                ],
              }),
              d(`div`, {
                style: {
                  display: `flex`,
                  gap: 8,
                  justifyContent: `center`,
                  marginTop: 20,
                  position: `relative`,
                  zIndex: 10,
                },
                children: Array.from({ length: v }).map((e, n) =>
                  d(
                    `button`,
                    {
                      onClick: () => ne(n),
                      style: {
                        width: n === u ? 24 : 8,
                        height: 8,
                        borderRadius: 4,
                        border: `none`,
                        cursor: `pointer`,
                        padding: 0,
                        background:
                          n === u ? t[n]?.accentColor || `#fff` : `rgba(255,255,255,0.15)`,
                        transition: `all 0.35s ease`,
                      },
                    },
                    n,
                  ),
                ),
              }),
            ],
          }),
    ],
  });
}
var so,
  co,
  lo = e(() => {
    (i(),
      h(),
      n(),
      y(),
      fe(),
      (so = [
        {
          title: `Brand Design`,
          description: `Crafting memorable identities that resonate with your audience.`,
          tag: `Popular`,
          ctaText: `Learn More →`,
          ctaUrl: `#`,
          accentColor: `#6366f1`,
        },
        {
          title: `Web Development`,
          description: `High-performance websites built with cutting-edge frameworks.`,
          tag: ``,
          ctaText: `Learn More →`,
          ctaUrl: `#`,
          accentColor: `#3b82f6`,
        },
        {
          title: `SEO Strategy`,
          description: `Data-driven search optimization that drives organic growth.`,
          tag: ``,
          ctaText: `Learn More →`,
          ctaUrl: `#`,
          accentColor: `#10b981`,
        },
        {
          title: `Motion Design`,
          description: `Captivating animations and micro-interactions for\xA0better\xA0UX.`,
          tag: `New`,
          ctaText: `Learn More →`,
          ctaUrl: `#`,
          accentColor: `#f59e0b`,
        },
        {
          title: `Digital Strategy`,
          description: `Comprehensive roadmaps aligning business goals with\xA0execution.`,
          tag: ``,
          ctaText: `Learn More →`,
          ctaUrl: `#`,
          accentColor: `#ec4899`,
        },
        {
          title: `CMS Solutions`,
          description: `Flexible content management tailored to editorial\xA0teams.`,
          tag: ``,
          ctaText: `Learn More →`,
          ctaUrl: `#`,
          accentColor: `#8b5cf6`,
        },
        {
          title: `Analytics & Data`,
          description: `Actionable insights from advanced tracking and\xA0reporting.`,
          tag: ``,
          ctaText: `Learn More →`,
          ctaUrl: `#`,
          accentColor: `#14b8a6`,
        },
        {
          title: `Creative Branding`,
          description: `Full-spectrum brand experiences from naming to\xA0launch.`,
          tag: `Premium`,
          ctaText: `Learn More →`,
          ctaUrl: `#`,
          accentColor: `#f43f5e`,
        },
      ]),
      de(oo, {
        backgroundColor: { type: S.Color, title: `Background`, defaultValue: `#06060f` },
        cardBackground: { type: S.Color, title: `Card BG`, defaultValue: `rgba(10, 10, 20, 0.85)` },
        cardDepth: {
          type: S.Number,
          title: `3D Depth (px)`,
          defaultValue: 400,
          min: 200,
          max: 600,
          step: 10,
        },
        autoPlaySpeed: {
          type: S.Number,
          title: `Auto-play (ms)`,
          defaultValue: 4e3,
          min: 0,
          max: 1e4,
          step: 500,
        },
        cards: {
          type: S.Array,
          title: `Cards`,
          maxCount: 8,
          control: {
            type: S.Object,
            controls: {
              image: { type: S.Image, title: `Image` },
              title: { type: S.String, title: `Title`, defaultValue: `Service Title` },
              description: {
                type: S.String,
                title: `Description`,
                defaultValue: `A short description of this service offering.`,
              },
              tag: { type: S.String, title: `Tag`, defaultValue: `` },
              ctaText: { type: S.String, title: `CTA Text`, defaultValue: `Learn More →` },
              ctaUrl: { type: S.Link, title: `CTA URL`, defaultValue: `#` },
              accentColor: { type: S.Color, title: `Accent`, defaultValue: `#6366f1` },
            },
          },
          defaultValue: so,
        },
      }),
      (co = oo));
  });
function uo(e, t) {
  return {
    description: `Made with Framer`,
    robots: `max-image-preview:large`,
    title: `My Framer Site`,
  };
}
var fo = e(() => {});
function po(e, t) {
  return {
    breakpoints: [{ hash: `72rtr7` }],
    description: uo(e, t).description,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-Put6z`,
    title: uo(e, t).title || `Home`,
    viewport: `width=900`,
  };
}
var mo,
  ho,
  go = e(() => {
    (fo(),
      (mo = 1),
      (ho = {
        exports: {
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  _o,
  vo,
  yo,
  bo,
  xo,
  So,
  Co,
  wo,
  To,
  Eo,
  Do,
  Oo = e(() => {
    (h(),
      fe(),
      y(),
      n(),
      lo(),
      go(),
      (_o = be(co)),
      (vo = {}),
      (yo = []),
      (bo = `framer-Put6z`),
      (xo = { WQLkyLRf1: `framer-v-72rtr7` }),
      (So = (e, t, n) => (e && t ? `position` : n)),
      (Co = ({ value: e }) =>
        ae()
          ? null
          : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (wo = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (To = ie(
        f(function (e, n) {
          let i = r(null),
            a = n ?? i,
            o = ee(),
            { activeLocale: s, setLocale: c } = oe();
          xe();
          let { style: l, className: u, layoutId: f, variant: h, ...g } = wo(e);
          ne(t(() => po({}, s), [s]));
          let [te, y] = re(h, vo, !1),
            ie = ye(bo),
            ae = p(ue)?.isLayoutTemplate,
            se = So(ae, !!p(_)?.transition?.layout);
          return (
            x({}),
            d(ue.Provider, {
              value: { activeVariantId: te, primaryVariantId: `WQLkyLRf1`, variantClassNames: xo },
              children: m(v, {
                id: f ?? o,
                children: [
                  d(Co, { value: `html body { background: rgb(255, 255, 255); }` }),
                  d(b.div, {
                    ...g,
                    className: ye(ie, `framer-72rtr7`, u),
                    ref: a,
                    style: { ...l },
                    children: d(b.div, {
                      className: `framer-1ia81dl`,
                      "data-framer-name": `Viewport`,
                      layout: se,
                      children: d(`div`, {
                        className: `framer-1v8iwp1`,
                        "data-framer-name": `Inner Container`,
                        children: d(ve, {
                          children: d(he, {
                            className: `framer-1mzmxfx-container`,
                            isAuthoredByUser: !0,
                            nodeId: `M3LxDkFIh`,
                            scopeId: `augiA20Il`,
                            children: d(co, {
                              autoPlaySpeed: 4500,
                              backgroundColor: `rgb(6, 6, 15)`,
                              cardBackground: `rgba(10, 10, 20, 0.85)`,
                              cardDepth: 400,
                              cards: [
                                {
                                  accentColor: `rgb(99, 102, 241)`,
                                  ctaText: `Learn More →`,
                                  ctaUrl: `#`,
                                  description: `Crafting memorable identities that resonate with your audience.`,
                                  image: `https://framerusercontent.com/images/4bMWFHesh03c3rKsIWMvVcpS8.jpg?width=2552&height=3468`,
                                  tag: `Popular`,
                                  title: `Brand Design`,
                                },
                                {
                                  accentColor: `rgb(59, 130, 246)`,
                                  ctaText: `Learn More →`,
                                  ctaUrl: `#`,
                                  description: `High-performance websites built with cutting-edge frameworks.`,
                                  image: `https://framerusercontent.com/images/fxzCsQzTAX0ExNSlNdKGUdMBwTA.jpg?width=4000&height=6000`,
                                  tag: ``,
                                  title: `Web Development`,
                                },
                                {
                                  accentColor: `rgb(16, 185, 129)`,
                                  ctaText: `Learn More →`,
                                  ctaUrl: `#`,
                                  description: `Data-driven search optimization that drives organic growth.`,
                                  image: `https://framerusercontent.com/images/J3PCopO0nPbq0SWEUtPJE0xVNY.jpg?width=2268&height=3629`,
                                  tag: ``,
                                  title: `SEO Strategy`,
                                },
                                {
                                  accentColor: `rgb(245, 158, 11)`,
                                  ctaText: `Learn More →`,
                                  ctaUrl: `#`,
                                  description: `Captivating animations and micro-interactions for\xA0better\xA0UX.`,
                                  image: `https://framerusercontent.com/images/cqOrmHFa4vMVyZjYQHnramBe4.jpg?width=4498&height=6747`,
                                  tag: `New`,
                                  title: `Motion Design`,
                                },
                                {
                                  accentColor: `rgb(236, 72, 153)`,
                                  ctaText: `Learn More →`,
                                  ctaUrl: `#`,
                                  description: `Comprehensive roadmaps aligning business goals with\xA0execution.`,
                                  image: `https://framerusercontent.com/images/YYlkIiQBDGW0cYND0c0H2JTWRE.jpg?width=3648&height=4560`,
                                  tag: ``,
                                  title: `Digital Strategy`,
                                },
                                {
                                  accentColor: `rgb(139, 92, 246)`,
                                  ctaText: `Learn More →`,
                                  ctaUrl: `#`,
                                  description: `Flexible content management tailored to editorial\xA0teams.`,
                                  image: `https://framerusercontent.com/images/xA7VGzGiCqth1yt3XiJeVC7J3gI.jpg?width=6000&height=4000`,
                                  tag: ``,
                                  title: `CMS Solutions`,
                                },
                                {
                                  accentColor: `rgb(20, 184, 166)`,
                                  ctaText: `Learn More →`,
                                  ctaUrl: `#`,
                                  description: `Actionable insights from advanced tracking and\xA0reporting.`,
                                  image: `https://framerusercontent.com/images/3TtJdhWmTknysn9s635Zreuzo.jpg?width=4000&height=6000`,
                                  tag: ``,
                                  title: `Analytics & Data`,
                                },
                                {
                                  accentColor: `rgb(244, 63, 94)`,
                                  ctaText: `Learn More →`,
                                  ctaUrl: `#`,
                                  description: `Full-spectrum brand experiences from naming to\xA0launch.`,
                                  image: `https://framerusercontent.com/images/auCbIt0uh4sZXnGA8uXHplAr04.jpg?width=6112&height=4075`,
                                  tag: `Premium`,
                                  title: `Creative Branding`,
                                },
                              ],
                              height: `100%`,
                              id: `M3LxDkFIh`,
                              layoutId: `M3LxDkFIh`,
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                  d(`div`, { id: `overlay` }),
                ],
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Put6z.framer-lux5qc, .framer-Put6z .framer-lux5qc { display: block; }`,
          `.framer-Put6z.framer-72rtr7 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 900px; }`,
          `.framer-Put6z .framer-1ia81dl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; width: 100%; }`,
          `.framer-Put6z .framer-1v8iwp1 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-Put6z .framer-1mzmxfx-container { flex: 1 0 0px; height: 100vh; position: relative; width: 1px; z-index: 1; }`,
        ],
        `framer-Put6z`,
      )),
      (Eo = To),
      (To.displayName = `Home`),
      (To.defaultProps = { height: 800, width: 900 }),
      me(To, [{ explicitInter: !0, fonts: [] }, ..._o], { supportsExplicitInterCodegen: !0 }),
      (Do = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FrameraugiA20Il`,
            slots: [],
            annotations: {
              framerLayoutTemplateFlowEffect: `true`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicWidth: `900`,
              framerImmutableVariables: `true`,
              framerScrollSections: `false`,
              framerIntrinsicHeight: `800`,
              framerResponsiveScreen: `true`,
              framerContractVersion: `1`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]}}}`,
              framerComponentViewportWidth: `true`,
              framerColorSyntax: `true`,
              framerAcceptsLayoutTemplate: `true`,
              framerAutoSizeImages: `true`,
            },
          },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
async function ko(e, t, n) {
  let r = jo[e],
    i = r ? await r(t, n) : void 0,
    a = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] };
  for (let t of Ao) {
    if (t.pageIds && !t.pageIds.has(e)) continue;
    let n = t.code(i);
    n && a[t.placement].push({ ...t, code: n });
  }
  return a;
}
var Ao,
  jo,
  Mo,
  No,
  Po = e(() => {
    ((Ao = []),
      (jo = {}),
      (Mo = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] }),
      (No = {
        exports: {
          snippetsSorting: { type: `variable`, annotations: { framerContractVersion: `1` } },
          getSnippets: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  Fo,
  Io,
  Lo,
  Ro,
  zo = e(() => {
    (h(),
      n(),
      fe(),
      (Fo = () => (
        a(() => {
          let e = document.querySelector(`meta[name="robots"]`);
          e
            ? e.setAttribute(`content`, `noindex`)
            : ((e = document.createElement(`meta`)),
              e.setAttribute(`name`, `robots`),
              e.setAttribute(`content`, `noindex`),
              document.head.appendChild(e));
        }, []),
        d(`div`, {
          className: `__framer-not-found-page`,
          style: {
            display: `flex`,
            height: `100vh`,
            alignItems: `center`,
            justifyContent: `center`,
            backgroundColor: `var(--color-primary)`,
            background: `var(--color-background)`,
            fontSize: `var(--font-size-body)`,
            boxSizing: `border-box`,
            fontFeatureSettings: `"liga", "clig"`,
            fontVariantLigatures: `common-ligatures`,
            textRendering: `optimizeLegibility`,
          },
          children: m(`main`, {
            style: {
              boxSizing: `border-box`,
              fontFamily: `"Inter", sans-serif`,
              fontWeight: 500,
              maxWidth: `240px`,
              width: `100%`,
              display: `flex`,
              alignItems: `center`,
              flexDirection: `column`,
              padding: `0 20px`,
              textWrap: `balance`,
            },
            children: [
              d(`svg`, {
                xmlns: `http://www.w3.org/2000/svg`,
                width: `14`,
                height: `21`,
                style: {
                  verticalAlign: `middle`,
                  color: `var(--color-primary)`,
                  marginBottom: `20px`,
                },
                children: d(`path`, {
                  d: `M 14 0 L 14 7 L 7 7 L 0 0 Z M 14 14 L 7 14 L 7 21 L 0 14 L 0 7 L 7 7 Z`,
                  fill: `currentColor`,
                }),
              }),
              d(`h1`, {
                style: {
                  margin: `0 0 10px 0`,
                  fontSize: `var(--font-size-title)`,
                  color: `var(--color-primary)`,
                  textAlign: `center`,
                },
                children: `Page Not Found`,
              }),
              d(`div`, {
                style: {
                  color: `var(--color-secondary)`,
                  marginBottom: `20px`,
                  lineHeight: `1.5em`,
                  textAlign: `center`,
                },
                children: `The page you are looking for does not exist or may have been moved.`,
              }),
              d(`a`, {
                href: `/`,
                role: `button`,
                style: {
                  backgroundColor: `var(--color-tint)`,
                  color: `#ffffff`,
                  paddingLeft: `8px`,
                  paddingRight: `8px`,
                  borderRadius: `8px`,
                  lineHeight: `30px`,
                  height: `30px`,
                  textDecoration: `none`,
                  verticalAlign: `baseline`,
                },
                children: `Back to Home`,
              }),
            ],
          }),
        })
      )),
      (Io = ie(Fo, [
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+1F00-1FFF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0370-03FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+1F00-1FFF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0370-03FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,
        `@font-face {
      font-family: Inter Placeholder;
      src: local("Arial");
      ascent-override: 89.79%;
      descent-override: 22.36%;
      line-gap-override: 0%;
      size-adjust: 107.89%;
    }`,
        `.__framer-not-found-page {
      --color-background: #ffffff;
      --color-primary: #333;
      --color-secondary: #888;
      --color-tint: #0099ff;
      --font-size-body: 12px;
      --font-size-title: 12px;
    }`,
        `@media (prefers-color-scheme: dark) {
      .__framer-not-found-page {
        --color-background: #000000;
        --color-primary: #fff;
        --color-secondary: #888;
      }
    }`,
      ])),
      (Lo = Io),
      (Ro = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `component`,
            slots: [],
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  Bo = e(() => {
    (zo(), zo());
  });
function Vo() {
  let e = !1;
  try {
    e = c.self !== c.top;
  } catch {
    e = !0;
  }
  if (!e) return !1;
  let t = null,
    n = !1;
  if (c.location.ancestorOrigins && c.location.ancestorOrigins.length > 0) {
    let e = c.location.ancestorOrigins[0];
    try {
      t = new URL(e).host;
    } catch {}
  } else if (document.referrer)
    try {
      t = new URL(document.referrer).host;
    } catch {}
  return (t && (n = t === Wo || t.endsWith(`.${Wo}`)), n);
}
function Ho(e) {
  return f((t, n) => {
    let r = te(Go, Ko, qo),
      i = ge.current() === ge.canvas;
    return r && !i
      ? null
      : d(e, {
          ...t,
          ref: n,
          onClick: (e) => {
            (e.preventDefault(),
              c.open(
                `https://www.framer.com/r/badge/?utm_campaign=freeplanbadge&utm_source=${encodeURIComponent(c?.location?.origin)}`,
              ));
          },
          style: { ...t.style, pointerEvents: `auto` },
          title: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
          className: t.className + ` __framer-badge`,
        });
  });
}
function Uo(e) {
  return f((t, n) =>
    m(g, {
      children: [
        d(`p`, {
          style: { position: `absolute`, transform: `scale(0.001)` },
          children: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
        }),
        d(e, { ...t, ref: n }),
      ],
    }),
  );
}
var Wo,
  Go,
  Ko,
  qo,
  Jo = e(() => {
    (i(),
      h(),
      n(),
      fe(),
      (Wo = `framer.com`),
      (Go = () => () => {}),
      (Ko = () => Vo()),
      (qo = () => !1));
  }),
  Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es,
  ts,
  ns,
  rs,
  is = e(() => {
    (h(),
      fe(),
      n(),
      (Yo = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 97 10" xmlns="http://www.w3.org/2000/svg"><path d="M 91.736 9.781 L 91.736 2.818 L 93.316 2.818 L 93.316 3.98 L 93.374 3.98 C 93.501 3.577 93.714 3.269 94.014 3.053 C 94.328 2.833 94.704 2.72 95.087 2.729 C 95.185 2.729 95.287 2.733 95.392 2.742 C 95.498 2.75 95.587 2.759 95.659 2.767 L 95.659 4.253 C 95.552 4.23 95.444 4.215 95.335 4.209 C 95.188 4.192 95.039 4.184 94.891 4.184 C 94.603 4.184 94.343 4.247 94.11 4.374 C 93.882 4.497 93.702 4.674 93.57 4.907 C 93.434 5.16 93.366 5.445 93.374 5.732 L 93.374 9.782 L 91.736 9.782 Z M 87.286 9.927 C 86.588 9.927 85.985 9.779 85.477 9.483 C 84.969 9.183 84.577 8.761 84.303 8.22 C 84.032 7.678 83.897 7.048 83.897 6.328 C 83.897 5.618 84.032 4.988 84.303 4.443 C 84.56 3.917 84.96 3.475 85.458 3.167 C 85.953 2.858 86.531 2.704 87.191 2.704 C 87.64 2.704 88.059 2.78 88.448 2.932 C 88.841 3.08 89.186 3.305 89.482 3.605 C 89.779 3.901 90.009 4.272 90.174 4.715 C 90.344 5.155 90.428 5.67 90.428 6.258 L 90.428 6.748 L 84.627 6.748 L 84.627 5.629 L 89.609 5.629 L 88.86 5.946 C 88.868 5.594 88.801 5.243 88.664 4.918 C 88.549 4.641 88.355 4.404 88.105 4.238 C 87.86 4.074 87.559 3.991 87.204 3.991 C 86.852 3.991 86.55 4.074 86.296 4.239 C 86.042 4.404 85.847 4.629 85.712 4.912 C 85.576 5.213 85.509 5.54 85.515 5.87 L 85.515 6.62 C 85.515 7.047 85.587 7.413 85.731 7.717 C 85.879 8.017 86.089 8.248 86.359 8.409 C 86.63 8.566 86.948 8.644 87.312 8.644 C 87.562 8.644 87.786 8.608 87.984 8.536 C 88.177 8.467 88.353 8.356 88.499 8.212 C 88.642 8.072 88.749 7.906 88.816 7.711 L 90.326 7.921 C 90.228 8.313 90.032 8.673 89.756 8.968 C 89.476 9.268 89.125 9.503 88.702 9.672 C 88.282 9.842 87.811 9.926 87.286 9.926 Z M 72.643 9.781 L 72.643 2.818 L 74.191 2.818 L 74.235 4.443 L 74.115 4.443 C 74.225 4.041 74.385 3.713 74.597 3.459 C 74.798 3.212 75.055 3.016 75.347 2.888 C 75.63 2.761 75.928 2.698 76.241 2.698 C 76.753 2.698 77.177 2.854 77.511 3.167 C 77.849 3.48 78.074 3.922 78.184 4.494 L 77.987 4.494 C 78.066 4.132 78.232 3.795 78.469 3.51 C 78.691 3.248 78.972 3.041 79.289 2.907 C 79.615 2.766 79.968 2.695 80.323 2.697 C 80.746 2.697 81.127 2.79 81.465 2.977 C 81.808 3.159 82.077 3.429 82.272 3.789 C 82.47 4.149 82.57 4.591 82.57 5.116 L 82.57 9.781 L 80.939 9.781 L 80.939 5.363 C 80.939 4.923 80.818 4.602 80.577 4.398 C 80.333 4.19 80.021 4.08 79.701 4.088 C 79.434 4.088 79.204 4.145 79.009 4.258 C 78.816 4.371 78.66 4.536 78.559 4.735 C 78.449 4.953 78.394 5.195 78.399 5.439 L 78.399 9.781 L 76.813 9.781 L 76.813 5.287 C 76.813 4.923 76.698 4.633 76.47 4.417 C 76.246 4.197 75.958 4.087 75.606 4.087 C 75.366 4.087 75.143 4.145 74.94 4.259 C 74.737 4.374 74.569 4.543 74.458 4.748 C 74.339 4.963 74.28 5.23 74.28 5.548 L 74.28 9.781 L 72.642 9.781 Z M 67.291 9.915 C 66.724 9.915 66.221 9.771 65.781 9.483 C 65.344 9.191 65 8.776 64.746 8.239 C 64.496 7.701 64.371 7.059 64.371 6.309 C 64.371 5.552 64.498 4.904 64.752 4.367 C 65.01 3.829 65.359 3.419 65.799 3.135 C 66.244 2.851 66.763 2.703 67.291 2.71 C 67.668 2.71 67.987 2.771 68.25 2.894 C 68.516 3.013 68.736 3.164 68.91 3.351 C 69.083 3.533 69.22 3.719 69.322 3.91 L 69.38 3.91 L 69.38 2.818 L 70.998 2.818 L 70.998 9.781 L 69.38 9.781 L 69.38 8.696 L 69.322 8.696 C 69.211 8.908 69.07 9.102 68.903 9.273 C 68.726 9.46 68.503 9.614 68.237 9.737 C 67.938 9.863 67.615 9.923 67.291 9.915 Z M 67.723 8.563 C 68.078 8.563 68.383 8.469 68.637 8.283 C 68.901 8.079 69.101 7.804 69.215 7.49 C 69.35 7.147 69.418 6.751 69.418 6.303 C 69.418 5.85 69.35 5.456 69.214 5.123 C 69.103 4.811 68.902 4.539 68.637 4.341 C 68.387 4.155 68.083 4.062 67.723 4.062 C 67.363 4.062 67.058 4.155 66.809 4.342 C 66.559 4.528 66.369 4.788 66.237 5.122 C 66.107 5.456 66.041 5.85 66.041 6.302 C 66.041 6.752 66.106 7.145 66.237 7.483 C 66.369 7.822 66.559 8.086 66.809 8.277 C 67.063 8.467 67.367 8.563 67.723 8.563 Z M 59.909 9.781 L 59.909 2.818 L 61.489 2.818 L 61.489 3.98 L 61.546 3.98 C 61.673 3.577 61.887 3.269 62.188 3.053 C 62.488 2.837 62.846 2.729 63.26 2.729 C 63.358 2.729 63.46 2.733 63.565 2.742 C 63.671 2.75 63.76 2.759 63.832 2.767 L 63.832 4.253 C 63.725 4.23 63.617 4.215 63.508 4.209 C 63.361 4.192 63.212 4.184 63.064 4.184 C 62.776 4.184 62.516 4.247 62.283 4.374 C 62.054 4.497 61.875 4.674 61.743 4.907 C 61.607 5.16 61.539 5.445 61.546 5.732 L 61.546 9.782 L 59.909 9.782 Z M 52.647 9.781 L 52.647 0.323 L 58.804 0.323 L 58.804 1.758 L 54.336 1.758 L 54.336 4.513 L 58.411 4.513 L 58.411 5.928 L 54.336 5.928 L 54.336 9.781 Z M 43.265 5.744 L 43.265 9.781 L 41.628 9.781 L 41.628 2.818 L 43.195 2.818 L 43.215 4.551 L 43.024 4.551 C 43.223 3.946 43.517 3.489 43.906 3.18 C 44.296 2.867 44.78 2.71 45.36 2.71 C 45.842 2.71 46.263 2.814 46.623 3.021 C 46.987 3.228 47.268 3.531 47.467 3.929 C 47.67 4.322 47.772 4.805 47.772 5.376 L 47.772 9.781 L 46.141 9.781 L 46.141 5.63 C 46.141 5.147 46.018 4.775 45.773 4.513 C 45.531 4.246 45.195 4.113 44.763 4.113 C 44.475 4.113 44.217 4.176 43.989 4.303 C 43.762 4.429 43.576 4.619 43.456 4.849 C 43.329 5.09 43.266 5.389 43.266 5.744 Z M 38.353 9.781 L 38.353 2.818 L 39.99 2.818 L 39.99 9.781 L 38.352 9.781 Z M 39.171 1.815 C 38.919 1.821 38.675 1.728 38.491 1.555 C 38.31 1.389 38.208 1.153 38.212 0.907 C 38.208 0.663 38.31 0.43 38.492 0.267 C 38.674 0.091 38.918 -0.005 39.171 0 C 39.438 0 39.664 0.088 39.851 0.266 C 40.041 0.44 40.136 0.653 40.136 0.907 C 40.136 1.161 40.041 1.377 39.85 1.555 C 39.667 1.728 39.423 1.821 39.171 1.815 Z M 30.741 9.927 C 30.043 9.927 29.44 9.779 28.932 9.483 C 28.426 9.185 28.018 8.746 27.758 8.22 C 27.488 7.678 27.352 7.048 27.352 6.328 C 27.352 5.618 27.487 4.988 27.758 4.443 C 28.015 3.917 28.415 3.475 28.913 3.167 C 29.408 2.858 29.986 2.704 30.646 2.704 C 31.095 2.704 31.514 2.78 31.903 2.932 C 32.293 3.079 32.646 3.308 32.938 3.605 C 33.234 3.901 33.464 4.272 33.629 4.715 C 33.799 5.155 33.883 5.67 33.883 6.258 L 33.883 6.748 L 28.083 6.748 L 28.083 5.629 L 33.066 5.629 L 32.316 5.946 C 32.316 5.553 32.251 5.21 32.12 4.918 C 32.005 4.641 31.811 4.404 31.561 4.238 C 31.316 4.074 31.015 3.991 30.66 3.991 C 30.34 3.983 30.024 4.069 29.752 4.239 C 29.498 4.404 29.303 4.629 29.168 4.912 C 29.032 5.213 28.965 5.54 28.971 5.87 L 28.971 6.62 C 28.971 7.047 29.043 7.413 29.187 7.717 C 29.335 8.017 29.545 8.248 29.816 8.409 C 30.086 8.566 30.404 8.644 30.768 8.644 C 31.018 8.644 31.242 8.608 31.441 8.536 C 31.634 8.467 31.809 8.356 31.955 8.212 C 32.099 8.072 32.205 7.906 32.272 7.711 L 33.782 7.921 C 33.684 8.313 33.488 8.673 33.212 8.968 C 32.932 9.268 32.581 9.503 32.158 9.672 C 31.707 9.847 31.226 9.934 30.742 9.926 Z M 22.312 9.915 C 21.777 9.924 21.251 9.774 20.801 9.483 C 20.361 9.191 20.016 8.776 19.766 8.239 C 19.516 7.701 19.392 7.059 19.392 6.309 C 19.392 5.552 19.519 4.904 19.772 4.367 C 20.027 3.829 20.374 3.419 20.814 3.135 C 21.254 2.852 21.751 2.71 22.305 2.71 C 22.682 2.71 23.001 2.771 23.264 2.894 C 23.53 3.013 23.748 3.164 23.918 3.351 C 24.091 3.533 24.228 3.721 24.33 3.916 L 24.381 3.916 L 24.381 0.323 L 26.019 0.323 L 26.019 9.781 L 24.413 9.781 L 24.413 8.689 L 24.343 8.689 C 24.233 8.904 24.091 9.101 23.923 9.273 C 23.734 9.468 23.51 9.626 23.263 9.737 C 23.001 9.855 22.684 9.915 22.312 9.915 Z M 22.737 8.563 C 23.092 8.563 23.397 8.469 23.651 8.283 C 23.915 8.079 24.115 7.804 24.229 7.49 C 24.364 7.147 24.432 6.751 24.432 6.303 C 24.432 5.85 24.364 5.456 24.229 5.123 C 24.118 4.811 23.917 4.539 23.651 4.341 C 23.385 4.151 23.064 4.053 22.737 4.062 C 22.41 4.053 22.089 4.152 21.823 4.342 C 21.573 4.528 21.383 4.79 21.252 5.128 C 21.118 5.505 21.054 5.903 21.062 6.303 C 21.062 6.751 21.127 7.145 21.258 7.483 C 21.389 7.822 21.58 8.086 21.829 8.277 C 22.079 8.467 22.381 8.563 22.737 8.563 Z M 14.352 9.915 C 13.817 9.924 13.291 9.774 12.841 9.483 C 12.405 9.191 12.061 8.776 11.806 8.239 C 11.556 7.701 11.432 7.059 11.432 6.309 C 11.432 5.552 11.559 4.904 11.812 4.367 C 12.071 3.829 12.42 3.419 12.86 3.135 C 13.3 2.852 13.797 2.71 14.352 2.71 C 14.728 2.71 15.048 2.771 15.31 2.894 C 15.577 3.013 15.797 3.164 15.97 3.351 C 16.144 3.533 16.281 3.719 16.383 3.91 L 16.44 3.91 L 16.44 2.818 L 18.059 2.818 L 18.059 9.781 L 16.44 9.781 L 16.44 8.696 L 16.383 8.696 C 16.272 8.908 16.131 9.102 15.964 9.273 C 15.786 9.46 15.564 9.614 15.298 9.737 C 14.999 9.863 14.676 9.923 14.352 9.915 Z M 14.783 8.563 C 15.139 8.563 15.443 8.469 15.697 8.283 C 15.951 8.093 16.144 7.828 16.275 7.49 C 16.41 7.147 16.478 6.751 16.478 6.303 C 16.478 5.85 16.41 5.456 16.275 5.123 C 16.164 4.811 15.963 4.539 15.697 4.341 C 15.447 4.155 15.143 4.062 14.783 4.062 C 14.423 4.062 14.119 4.155 13.869 4.342 C 13.608 4.543 13.41 4.813 13.298 5.122 C 13.167 5.456 13.101 5.85 13.101 6.302 C 13.101 6.752 13.167 7.145 13.298 7.483 C 13.429 7.822 13.62 8.086 13.869 8.277 C 14.123 8.467 14.428 8.563 14.783 8.563 Z M 0 9.781 L 0 0.323 L 2.507 0.323 L 4.322 5.236 C 4.382 5.418 4.452 5.646 4.532 5.922 C 4.612 6.197 4.695 6.493 4.779 6.811 C 4.864 7.124 4.942 7.428 5.014 7.725 C 5.09 8.017 5.154 8.273 5.204 8.493 L 4.843 8.493 C 5.045 7.633 5.267 6.778 5.509 5.928 C 5.589 5.648 5.662 5.418 5.725 5.236 L 7.509 0.323 L 10.023 0.323 L 10.023 9.781 L 8.347 9.781 L 8.347 4.989 C 8.35 4.443 8.358 3.897 8.372 3.351 L 8.398 2.38 C 8.406 2.054 8.412 1.743 8.417 1.447 L 8.563 1.447 C 8.473 1.773 8.379 2.107 8.277 2.45 L 7.979 3.446 C 7.886 3.764 7.795 4.056 7.706 4.322 C 7.636 4.546 7.561 4.768 7.483 4.989 L 5.719 9.781 L 4.303 9.781 L 2.513 4.989 L 2.291 4.329 C 2.198 4.04 2.107 3.75 2.018 3.459 L 1.713 2.469 C 1.613 2.129 1.514 1.788 1.415 1.447 L 1.593 1.447 C 1.597 1.73 1.603 2.035 1.612 2.361 C 1.62 2.682 1.627 3.006 1.631 3.332 C 1.639 3.654 1.646 3.958 1.65 4.246 C 1.658 4.534 1.663 4.781 1.663 4.989 L 1.663 9.781 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="9.927205036163329px" id="LLqmOOyHA" transform="translate(0 -0.25)" width="95.65900006103517px"/></svg>'), var(--framer-icon-mask, none)`),
      (Xo = `alpha, var(--framer-icon-mask-mode, add)`),
      (Zo = `no-repeat`),
      (Qo = `center`),
      ($o = `auto`),
      (es = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? d(b.div, { ...a, layoutId: r, ref: t }) : d(`div`, { ...a, ref: t });
      })),
      (ts = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (ns = ie(
        f(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = ts(e);
          return d(es, {
            ...c,
            className: ye(`framer-g7oZR`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-g7oZR { -webkit-mask-image: ${Yo}; -webkit-mask-position: ${Qo}; -webkit-mask-repeat: ${Zo}; -webkit-mask-size: ${$o}; aspect-ratio: 9.7; background-color: var(--1bd4d3i); mask-image: ${Yo}; mask-mode: ${Xo}; mask-position: ${Qo}; mask-repeat: ${Zo}; mask-size: ${$o}; width: 97px; }`,
        ],
        `framer-g7oZR`,
      )),
      (ns.displayName = `Text`),
      (rs = ns),
      de(ns, {
        Z1QnXqTEb: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: S.Color },
        vtL2DrqsL: { defaultValue: `rgb(0, 0, 0)`, hidden: !0, title: `Fill 2`, type: S.Color },
      }));
  }),
  as,
  os,
  ss,
  cs,
  ls,
  us,
  ds,
  fs,
  ps,
  ms = e(() => {
    (h(),
      fe(),
      n(),
      (as = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 12 0 L 12 6 L 6 6 Z M 0 6 L 6 6 L 12 12 L 6 12 L 6 18 L 0 12 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="18px" id="td4SVg2I8" transform="translate(0 1.5)" width="12px"/></svg>'), var(--framer-icon-mask, none)`),
      (os = `alpha, var(--framer-icon-mask-mode, add)`),
      (ss = `no-repeat`),
      (cs = `center`),
      (ls = `auto`),
      (us = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? d(b.div, { ...a, layoutId: r, ref: t }) : d(`div`, { ...a, ref: t });
      })),
      (ds = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (fs = ie(
        f(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = ds(e);
          return d(us, {
            ...c,
            className: ye(`framer-hcsc7`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-hcsc7 { -webkit-mask-image: ${as}; -webkit-mask-position: ${cs}; -webkit-mask-repeat: ${ss}; -webkit-mask-size: ${ls}; aspect-ratio: 0.6; background-color: var(--1bd4d3i); mask-image: ${as}; mask-mode: ${os}; mask-position: ${cs}; mask-repeat: ${ss}; mask-size: ${ls}; width: 12px; }`,
        ],
        `framer-hcsc7`,
      )),
      (fs.displayName = `Framer`),
      (ps = fs),
      de(fs, {
        Z1QnXqTEb: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: S.Color },
        vtL2DrqsL: { defaultValue: `rgb(0, 0, 0)`, hidden: !0, title: `Fill 2`, type: S.Color },
      }));
  }),
  hs,
  gs,
  _s,
  vs,
  ys,
  bs,
  xs,
  Ss,
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As,
  js,
  Ms,
  Ns = e(() => {
    (h(),
      fe(),
      y(),
      n(),
      Jo(),
      is(),
      ms(),
      (hs = be(ps)),
      (gs = be(rs)),
      (_s = ce(rs, { nodeId: `pBR1Ew0r8`, override: Uo, scopeId: `PX9hIOIVM` })),
      (vs = le(se(ce(b.a, { nodeId: `HK2sXlagE`, override: Ho, scopeId: `PX9hIOIVM` })))),
      (ys = `framer-6jWyo`),
      (bs = { HK2sXlagE: `framer-v-n0ccwk` }),
      (xs = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 40, delay: 1, mass: 1.5, stiffness: 350, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Ss = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      }),
      (Cs = { duration: 0, type: `tween` }),
      (ws = (e, t) => `translate(-50%, -50%) ${t}`),
      (Ts = (e, t) => `translateX(-50%) ${t}`),
      (Es = ({ value: e, children: n }) => {
        let r = p(_),
          i = e ?? r.transition,
          a = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(_.Provider, { value: a, children: n });
      }),
      (Ds = b.create(o)),
      (Os = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (ks = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (As = ie(
        f(function (e, t) {
          let n = r(null),
            i = t ?? n,
            a = ee(),
            { activeLocale: o, setLocale: s } = oe();
          xe();
          let { style: c, className: l, layoutId: u, variant: f, ...p } = Os(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: te,
              gestureHandlers: _,
              gestureVariant: y,
              isLoading: ne,
              setGestureState: re,
              setVariant: ie,
              variants: ae,
            } = _e({ defaultVariant: `HK2sXlagE`, ref: i, variant: f, variantClassNames: bs }),
            x = ks(e, ae),
            se = ye(ys);
          return d(v, {
            id: u ?? a,
            children: d(Ds, {
              animate: ae,
              initial: !1,
              children: d(Es, {
                value: Cs,
                children: d(pe, {
                  href: `https://www.framer.com`,
                  motionChild: !0,
                  nodeId: `HK2sXlagE`,
                  openInNewTab: !1,
                  relValues: [],
                  scopeId: `PX9hIOIVM`,
                  children: m(vs, {
                    ...p,
                    ..._,
                    __framer__presenceAnimate: xs,
                    __framer__presenceInitial: Ss,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: `${ye(se, `framer-n0ccwk`, l, g)} framer-bmpgw8`,
                    "data-framer-appear-id": `n0ccwk`,
                    "data-framer-name": `Light`,
                    "data-nosnippet": !0,
                    layoutDependency: x,
                    layoutId: `HK2sXlagE`,
                    optimized: !0,
                    ref: i,
                    style: { ...c },
                    children: [
                      d(b.div, {
                        className: `framer-13yxzio`,
                        "data-framer-name": `Backdrop`,
                        layoutDependency: x,
                        layoutId: `IH1cvP0s5`,
                        style: {
                          backgroundColor: `rgb(255, 255, 255)`,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                          boxShadow: `0px 0.6021873017743928px 1.5656869846134214px -1.5px rgba(0, 0, 0, 0.17), 0px 2.288533303243457px 5.950186588432988px -3px rgba(0, 0, 0, 0.14), 0px 10px 26px -4.5px rgba(0, 0, 0, 0.02)`,
                        },
                      }),
                      m(b.div, {
                        className: `framer-19yaanm`,
                        "data-framer-name": `Content`,
                        layoutDependency: x,
                        layoutId: `U6HIU1IEW`,
                        transformTemplate: ws,
                        children: [
                          d(b.div, {
                            className: `framer-1kflzx5`,
                            layoutDependency: x,
                            layoutId: `roMJYXHnO`,
                            children: d(ps, {
                              animated: !0,
                              className: `framer-e50co`,
                              "data-framer-name": `Logo`,
                              layoutDependency: x,
                              layoutId: `O3s3GcxMZ`,
                              style: { "--1bd4d3i": `rgb(0, 0, 0)`, "--otdjsv": `rgb(0, 0, 0)` },
                              transformTemplate: Ts,
                            }),
                          }),
                          d(_s, {
                            animated: !0,
                            className: `framer-1um7t9d`,
                            "data-framer-name": `Text`,
                            layoutDependency: x,
                            layoutId: `pBR1Ew0r8`,
                            style: { "--1bd4d3i": `rgb(0, 0, 0)`, "--otdjsv": `rgb(0, 0, 0)` },
                          }),
                        ],
                      }),
                      d(b.div, {
                        className: `framer-j4ugry`,
                        "data-framer-name": `Bottom`,
                        layoutDependency: x,
                        layoutId: `vCwsHyUh8`,
                        style: {
                          borderBottomLeftRadius: 11,
                          borderBottomRightRadius: 11,
                          borderTopLeftRadius: 11,
                          borderTopRightRadius: 11,
                          boxShadow: `inset 0px 0px 0px 1px rgb(0, 0, 0)`,
                          mask: `linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`,
                          opacity: 0.06,
                          WebkitMask: `linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`,
                        },
                      }),
                      d(b.div, {
                        className: `framer-jnuwbw`,
                        "data-framer-name": `Border`,
                        layoutDependency: x,
                        layoutId: `ZirFGX8Eh`,
                        style: {
                          borderBottomLeftRadius: 11,
                          borderBottomRightRadius: 11,
                          borderTopLeftRadius: 11,
                          borderTopRightRadius: 11,
                          boxShadow: `inset 0px 0px 0px 1px rgb(0, 0, 0)`,
                          opacity: 0.04,
                        },
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-6jWyo.framer-bmpgw8, .framer-6jWyo .framer-bmpgw8 { display: block; }`,
          `.framer-6jWyo.framer-n0ccwk { gap: 10px; height: 38px; overflow: visible; position: relative; text-decoration: none; width: 140px; }`,
          `.framer-6jWyo .framer-13yxzio { bottom: 1px; flex: none; left: 1px; overflow: hidden; position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-6jWyo .framer-19yaanm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; }`,
          `.framer-6jWyo .framer-1kflzx5 { flex: none; height: 16px; overflow: visible; position: relative; width: 12px; }`,
          `.framer-6jWyo .framer-e50co { flex: none; height: var(--framer-aspect-ratio-supported, 20px); left: 50%; position: absolute; top: -2px; }`,
          `.framer-6jWyo .framer-1um7t9d { flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; }`,
          `.framer-6jWyo .framer-j4ugry, .framer-6jWyo .framer-jnuwbw { bottom: 0px; flex: none; left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; top: 0px; }`,
        ],
        `framer-6jWyo`,
      )),
      (js = As),
      (As.displayName = `Badge`),
      (As.defaultProps = { height: 38, width: 140 }),
      me(As, [{ explicitInter: !0, fonts: [] }, ...hs, ...gs], {
        supportsExplicitInterCodegen: !0,
      }),
      (Ms = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerPX9hIOIVM`,
            slots: [],
            annotations: {
              framerAutoSizeImages: `true`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,
              framerIntrinsicWidth: `140`,
              framerIntrinsicHeight: `38`,
              framerColorSyntax: `true`,
              framerDisplayContentsDiv: `false`,
              framerImmutableVariables: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export {
  po as _,
  Lo as a,
  to as b,
  ko as c,
  Do as d,
  Eo as f,
  go as g,
  ho as h,
  Bo as i,
  Po as l,
  yo as m,
  Ms as n,
  Ro as o,
  Oo as p,
  Ns as r,
  No as s,
  js as t,
  Mo as u,
  mo as v,
  eo as y,
};
//# sourceMappingURL=shared-lib.DELCod3s.mjs.map
