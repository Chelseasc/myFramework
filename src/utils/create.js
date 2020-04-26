import Vue from 'vue';
export default function create(Component, props) {
    const vm = new Vue({
        // 生成虚拟Dom
        render(h) { // h即createElenment h只是简写
            h(Component, {props})
        }
    });

}