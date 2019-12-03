<template>
  <el-dialog title="登录" :visible="dialogVisible" @close="cancel">
    <el-form label-width="80px">
      <el-form-item label="邮箱">
        <el-input v-model="params.email"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="params.password"></el-input>
      </el-form-item>
      <el-formItem v-if="handleFlag === 'register'" label="昵称">
        <el-input v-model="params.name" placeholder="用户名或昵称" autocomplete="off"></el-input>
      </el-formItem>
      <el-formItem v-if="handleFlag === 'register'" label="手机">
        <el-input v-model="params.phone" placeholder="手机号" autocomplete="off"></el-input>
      </el-formItem>
      <el-formItem v-if="handleFlag === 'register'" label="简介">
        <el-input v-model="params.desc" placeholder="个人简介" autocomplete="off"></el-input>
      </el-formItem>
    </el-form>
    <div class="dialog-footer" slot="footer">
      <el-button type="success" @click="handleOAuth">github 授权登录</el-button>
      <el-button v-if="handleFlag === 'login'" type="primary" @click="handleOk">登录</el-button>
      <el-button v-else type="primary" @click="handleOk">注册</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Prop, Component, Emit } from 'vue-property-decorator';

@Component
export default class RegisterAndLogin extends Vue {
  @Prop({ default: true }) private visible!: boolean;
  @Prop({ default: 'login'}) private handleFlag!: string;

  private params: any = {
    email: '',
    password: '',
    name: '',
    phone: '',
    desc: '',
  };
  // 同vue2.0 computed
  get dialogVisible(): boolean {
    // console.log(this.visible);
    return this.visible;
  }
  // this.$emit
  @Emit()
  private cancel(): boolean {
    return false;
  }

  private handleOAuth(): void {
    // 保存跳转到授权页面之前的页面链接
    const preventHistory: object = {
      name: this.$route.name,
      query: this.$route.query,
    };
    window.sessionStorage.preventHistory = JSON.stringify(preventHistory);
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=284e342407234d96d40c';
  }

  private handleOk(): void {
    // 杨元庆001Abc@lenovo.com.cn
    const reg = new RegExp('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$');
    if (!reg.test(this.params.email)) {
      this.$message.error('邮箱格式不正确');
    } else {
      if (!this.params.password) {
        this.$message.error('密码不能为空');
      }
    }
    // 登录操作
    this.submit();
  }

  private async submit(): Promise<void> {
    // 用来async 函数类型必须加Promise， 且该函数无返回值<void>
    let data: any = '';
    if (this.handleFlag === 'register') {
      // 注册
      data = await this.$https.post(this.$urls.register, this.params);
    } else {
      data = await this.$https.post(this.$urls.login, this.params);
    }
  }
}
</script>

<style>
</style>