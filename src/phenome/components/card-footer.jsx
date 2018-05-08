import Utils from '../utils/utils';
import Mixins from '../utils/mixins';

export default {
  name: 'f7-card-footer',
  props: {
    id: [String, Number],
    ...Mixins.colorProps,
  },
  render() {
    const classes = Utils.classNames(
      this.props.className,
      'card-footer',
      Mixins.colorClasses(this),
    );
    return (<div id={this.props.id} style={this.props.style} className={classes}><slot /></div>);
  },
};
