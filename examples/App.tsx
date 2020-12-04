import { defineComponent, ref } from "vue";
import Button from "../components/Button";
export default defineComponent({
  setup() {
    return () => (
      <div>
        <Button>hello</Button>
        <Button  btnType="primary" size="lg">
          hello
        </Button>
        <Button  btnType="link" disabled href="http://www.baidu.com">
          hello
        </Button>
        <Button btnType="danger" href="http://www.baidu.com">
          hello
        </Button>
      </div>
    );
  },
});
