<template>
        <!-- 详情页头部 -->
    <div class="detail-log">
      <div @click="handlerBack">
        <span class="iconfont icon-fanhui"></span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAeCAYAAACc7RhZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDg0ODFCNDI0MTM1MTFFOEIzQjVEMjZEQ0NBNzE4NDEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDg0ODFCNDE0MTM1MTFFOEIzQjVEMjZEQ0NBNzE4NDEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQjAyQ0JCNjRBQTUxMUU3QjMyQzgwQkFDQjFERDlBQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQjAyQ0JCNzRBQTUxMUU3QjMyQzgwQkFDQjFERDlBQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqxLGD0AAAWKSURBVHjazFkJbBVVFJ1PRwsGtCAgKC1VgmhdIlVQcYUqIiVuFRut1GgVNO5GWTSiGLUGY9S4oxKj7IhgoFXUFNPEErGKawTZxGgCUhFFqVaknpucSW6ub7bvr+lNTv7Mm/fezLvvLufdn2m/zstG9gPOAy4HTgMGAH8CXwNvAwuAL72Ol2eBG9T9I8C0NBP4/K0Feqn2SRH9q4H7gCLz7ADgROIe4C32+yjlouQdJwGFCfoOMvdHAeMj+u8DtgCf8trL0AK2mgVlHINPAGYDQ1MsRl7yHHdld4L+ZwGvOpSba1lP612bVAG3Ao/S9ANpBxqBN4F1QA/gFKASONSM3wBcRs2HSRHdpof3/8h2YIgf06kr8DxwlWkXP79bNGjaFwFTgatp/v3ZPhhYzfYFIe+6xiy+AXgCaM3RgnsC04FjeX8IUBGlgN7ACuBk1bYNuBF4I2JcG/ACFypWcy0tSpQ5j377kGPcYHX9O3Ah8FuOd/1jYJOOIYECxE8LTOfHzeLfBSbQdJLIL8BEoJ6xoycV8SDQBKyKGPtTByxeZLO57+Kr9GHlJvERYBh3chrNuirlSyUmDGesKAEmxyxeyxXA3BwtfhxQF5YGw3bwXGA0sFi5xREpXyymvxE4nXMt9DqR+IzmVjJKCYtVe4vDjLRC9gLfmed/8PfnmMU3KLPfyV9R3KyQ/D9STFi1SSZbGTF/8F16vjWSBqMUkETazUsGdtBmdSPJqQHOcHzjX8AIoDnFnBmfO1xOJtfZpAtdp4qx5KAYej4TGBUzp8xRQSLU5JOgbHWwrz7MzWnkQGBKTJ8dzApRMpQfWBnBCoU0fUiLCGQkA/d6R/8RJHQXMC6JNEcFwX4h2SFKChKM+SJEAccDV3J3wgJtK8nWLKZSsZAyoFj1KTMKGM4sdqZjvr/9TmTuU5j2XCI7PYfYxbY84Hz6vlVkIJK6HzDZbh+5yUtC9KIUsJGnsjhpNkxxXEz/pNR2AznAPF4HMoBmXxNyYuyveMzD5tlKKmVtEh7QSuqYRtqyGKPlM2AZsJTXgeQDY7josdz9KM7vOeLXDOD+NERIixxwLuX1+8CdCcb041kikPE8i4fJ9ebILGnuVMaFSlOv0KlP5jzSkcIPNhszIyzNJJEJqtjxY8Ix23jiCsaNiem/mx8/jOlMDi0fsOJjF/8tiy6FPDGGHXcD2Z+uk5UCCsnhPWUBSUX3HR3TdyIXtga4CzjcRmxgOTnLIPr39og1NJn7qmwVUK6uhaJ+kkIB76nrc+jLUdWgopAj7O3AYczh9YzkwgZfAx4LmW+ZuZ/kcvkkMeBiUwjZm0IB9dw5CVrdqYS6BOOkuLqEWWCdCXDVtJaSmDkaSfACal7MsbPTWIAQm7PV/dKUFrSDfhzIJRF9v2KV6Wgu7l4u3mfkl3T4A32+JIESxUqeNm3TFQtMtIAKBhCRX7mj9nnYwSiQ+er6IlNX1CI+Xat2XBjck1x0HalxNzNmVUSJzWNlqkXdD2R8+ZcC7IfnqYJEIFIG28P8upOMbJHDXz1HnbCN173I3ryQE2iQAbaQ/d0C9DX9dnFnj+HBpzEms9Satsk61viqBKWPscVMQ2WOSfMV2dDyjdWuCpz5CUz2RXOwseYsGeUV4HXDJrs6CjlanmHMGML77iwBlmsFCJ0tNb5SExLwlhtqGhQxmx28PO1533VwmkP//z6E9VWbthZzL/9Y3Qy8o9rG0qXmB/8LHEd+nGcqLKvp+7mW2xxngrl0uc8ZbJdQAYGUkpF6qjxX6qgRSBX6Zcc7F/LoH4gQupKM+m9Qyt1PpawGZSsFDlMdRSK0OYKPrIiZdxNPg3scz/qyhtBHxyff+Ipo/A5y8N4pqHIupOE/jG2hiU8NWXyw4zagev8IMABgWTh29dDSzAAAAABJRU5ErkJggg=="
          alt="途家"
        />
      </div>
      <div>房屋详情</div>
      <HeadNav class="icon"></HeadNav>
    </div>
</template>

<script>
import HeadNav from "components/home/headNav.vue";
export default {
    name:"Header",
    methods:{
        handlerBack(){
            this.$router.back()
        }
    },
    components:{
        HeadNav
    }
}
</script>

<style>
    /* 详情页头部 */
.detail-log {
  color: #ff9645;
  height: 0.44rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow: hidden;
}
.icon-fanhui{
  font-size: 14px;
  margin-top: .02rem;
}
.detail-log > div:nth-child(1) {
  display: flex;
  padding-left: 0.2rem;
  align-items: center;
}
.detail-log > div:nth-child(1) > img {
  margin-left: 0.02rem;
  width: 0.32rem;
  height: 0.15rem;
}
.detail-log > div:nth-child(2) {
  font-size: 18px;
  color: black;
  width: 2.25rem;
  text-align: center;
  line-height: 0.445rem;
}
.icon{
  margin: 0 0.1rem 0;
  font-size: 0.24rem;
  line-height: 0.44rem;
}

</style>
