export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onClick1(){
      this.$message.error('这是一条消息提示')
    },
    onClick2(){
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message.success('点了确定')
        }
      })
    }
  }
}
