import { defineComponent, PropType, VNode,Slot,Slots,renderSlot } from "vue";
import classNames from "classnames";
export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";
interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: VNode;
  href?: string;
}
export default defineComponent({
  name: "Button",
  props: {
    className: String,
    /**设置 Button 的禁用 */
    disabled: Boolean,
    /**设置 Button 的尺寸 */
    size: String as PropType<ButtonSize>,
    /**设置 Button 的类型 */
    btnType: String as PropType<ButtonType>,
    children: String,
    href: String,
  },
  methods: {
    handleClick(event: Event) {
     return this.$emit('click', event);
    },
  },
  render(props: BaseButtonProps) {
    const {
      btnType,
      className,
      disabled,
      size,
      children,
      href,
      ...restProps
    } = props;
    // btn, btn-lg, btn-primary
    const classes = classNames("btn", className, {
      [`btn-${btnType}`]: btnType,
      [`btn-${size}`]: size,
      disabled: btnType === "link" && disabled,
    });
    if (btnType === "link" && href) {
      return (
        <a class={classes} href={href} {...restProps}>
          {renderSlot(this.$slots,'default')}
        </a>
      );
    } else {
      const ButtonProps={
        ...restProps,
        onClick:this.handleClick
      }
      return (
        <button  class={classes} disabled={disabled} {...ButtonProps}>
          {renderSlot(this.$slots,'default')}
        </button>
      );
    }
  },
});
