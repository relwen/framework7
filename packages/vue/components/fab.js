import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __vueComponentDispatchEvent from '../runtime-helpers/vue-component-dispatch-event.js';
import __vueComponentProps from '../runtime-helpers/vue-component-props.js';
export default {
  name: 'f7-fab',
  props: Object.assign({
    id: [String, Number],
    morphTo: String,
    href: [Boolean, String],
    text: String,
    position: {
      type: String,
      default: 'right-bottom'
    }
  }, Mixins.colorProps),

  render() {
    const _h = this.$createElement;
    const self = this;
    const props = self.props;
    const {
      className,
      id,
      style,
      morphTo,
      href: initialHref,
      position,
      text
    } = props;
    let href = initialHref;
    if (href === true) href = '#';
    if (href === false) href = undefined;
    const linkChildren = [];
    const rootChildren = [];
    const {
      link: linkSlots,
      default: defaultSlots,
      root: rootSlots,
      text: textSlots
    } = self.$slots;

    if (defaultSlots) {
      for (let i = 0; i < defaultSlots.length; i += 1) {
        const child = defaultSlots[i];
        let isRoot;
        {
          if (child.tag && child.tag.indexOf('fab-buttons') >= 0) isRoot = true;
        }
        if (isRoot) rootChildren.push(child);else linkChildren.push(child);
      }
    }

    let textEl;

    if (text || textSlots && textSlots.length) {
      textEl = _h('div', {
        class: 'fab-text'
      }, [text || textSlots]);
    }

    let linkEl;

    if (linkChildren.length || linkSlots && linkSlots.length) {
      linkEl = _h('a', {
        key: 'f7-fab-link',
        on: {
          click: self.onClick.bind(self)
        },
        attrs: {
          href: href
        }
      }, [linkChildren, textEl, linkSlots]);
    }

    const classes = Utils.classNames(className, 'fab', `fab-${position}`, {
      'fab-morph': morphTo,
      'fab-extended': typeof textEl !== 'undefined'
    }, Mixins.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: {
        id: id,
        'data-morph-to': morphTo
      }
    }, [linkEl, rootChildren, rootSlots]);
  },

  methods: {
    onClick(event) {
      const self = this;
      self.dispatchEvent('click', event);
    },

    dispatchEvent(events, ...args) {
      __vueComponentDispatchEvent(this, events, ...args);
    }

  },
  computed: {
    props() {
      return __vueComponentProps(this);
    }

  }
};