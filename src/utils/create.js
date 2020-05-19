import Vue from 'vue';
export default function create(Component, props) {
    const vm = new Vue({
        // 生成虚拟Dom
        render(h) { // h即createElenment h只是简写
            return h(Component, {props})
        }
    }).$mount();

    // 手动挂载
    document.body.appendChild(vm.$el); // 上面render return的虚拟dom对应有真实dom 这里的$el就是真实DOM

    // 单例的需要销毁
    const comp = vm.$children[0]; // 只创建了一个实例即这个children
    comp.remove = function() {
        document.body.removeChild(vm.$el);
        vm.$destroy();
    }
    return comp;
}