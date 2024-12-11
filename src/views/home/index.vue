<template>
  <div class="max-w-screen-xl mx-auto h-full overflow-y-auto">
    <div class="bg-slate-50 p-2 pt-2 min-h-full">
      <el-form @submit.prevent>
        <h3 class="mb-2">QQ号查询手机号和LOL账号</h3>
        <el-form-item label="QQ号">
          <el-input
            v-model="qqnumber"
            clearable
            style="width: 200px"
          ></el-input>
          <el-button class="ml-2" type="primary" @click="QQtoPhone"
            >查询</el-button
          >
        </el-form-item>
        <el-descriptions border column="1">
          <el-descriptions-item v-if="result.phone" label="手机号"
            >{{ result.phone }}
            <el-icon @click="copyText(result.phone)"><DocumentCopy /></el-icon>
          </el-descriptions-item>
          <el-descriptions-item v-if="result.phone" label="归属地">{{
            result.phonediqu
          }}</el-descriptions-item>
          <el-descriptions-item v-if="result3.daqu" label="游戏大区"
            >{{ result3.daqu }}
          </el-descriptions-item>
          <el-descriptions-item v-if="result3.name" label="游戏昵称"
            >{{ result3.name }}
            <el-icon @click="copyText(result3.name)"><DocumentCopy /></el-icon>
          </el-descriptions-item>
        </el-descriptions>
        <h3 class="mb-2 mt-2">手机号查询QQ号</h3>
        <el-form-item label="手机号">
          <el-input
            v-model="phoneNumber"
            clearable
            style="width: 200px"
          ></el-input>
          <el-button class="ml-2" type="primary" @click="PhonetoQQ"
            >查询</el-button
          >
        </el-form-item>
        <el-descriptions border v-if="result2.qq">
          <el-descriptions-item label="QQ号"
            >{{ result2.qq }}
            <el-icon @click="copyText(result2.qq)"><DocumentCopy /></el-icon>
          </el-descriptions-item>
          <el-descriptions-item label="归属地">{{
            result2.phonediqu
          }}</el-descriptions-item>
        </el-descriptions>
        <h3 class="mb-2 mt-2">LOL查询QQ号</h3>
        <el-form-item label="lol名称">
          <el-input
            v-model="lolName"
            clearable
            style="width: 200px"
          ></el-input>
          <el-button class="ml-2" type="primary" @click="LOLtoQQ"
            >查询</el-button
          >
        </el-form-item>
        <el-descriptions border v-if="result4.qq">
          <el-descriptions-item label="QQ号"
            >{{ result4.qq }}
            <el-icon @click="copyText(result4.qq)"><DocumentCopy /></el-icon>
          </el-descriptions-item>
          <el-descriptions-item label="游戏大区">{{
            result4.daqu
          }}</el-descriptions-item>
        </el-descriptions>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { DocumentCopy } from '@element-plus/icons-vue'
import { ref, computed, onMounted, onActivated, nextTick } from 'vue'
import { qqapi, phone2qq, qqlol, lolname } from '@/axios/api.js'

// QQ查询手机
const qqnumber = ref('')
const result = ref({})
const result3 = ref({})
function QQtoPhone() {
  qqapi({ qq: qqnumber.value }).then(res => {
    console.log('返回设备', res)
    if (res.status === 500) {
      ElMessage.error('没有查询到手机号')
      result.value = {}
    } else if (res.status === 200) {
      ElMessage.success(res.message)
      result.value = res
    }
  })
  qqlol({ qq: qqnumber.value }).then(res => {
    console.log('返回设备', res)
    if (res.status === 500) {
      ElMessage.error('没有查询到LOL信息')
      result3.value = {}
    } else if (res.status === 200) {
      ElMessage.success(res.message)
      result3.value = res
    }
  })
}

// 手机查询QQ
const phoneNumber = ref('')
const result2 = ref({})
function PhonetoQQ() {
  phone2qq({ phone: phoneNumber.value }).then(res => {
    console.log('返回设备', res)
    if (res.status === 500) {
      ElMessage.error('没有查询到结果')
      result2.value = {}
    } else if (res.status === 200) {
      ElMessage.success(res.message)
      result2.value = res
    }
  })
}

// lol查询QQ
const lolName = ref('')
const result4 = ref({})
function LOLtoQQ() {
  lolname({ name: lolName.value }).then(res => {
    console.log('返回设备', res)
    if (res.status === 500) {
      ElMessage.error('没有查询到结果')
      result4.value = {}
    } else if (res.status === 200) {
      ElMessage.success(res.message)
      result4.value = res
    }
  })
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
    ElMessage.success('已复制成功')
  } catch (err) {
    console.error('复制失败：', err)
  }
}
</script>

