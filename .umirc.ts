import { defineConfig } from "umi";

const routes = [
  { path: "/", component: "index" },
  { path: "/docs", component: "docs" },
  { path: "/aboutUs", component: "aboutUs" },
  { path: "/companyAI", component: "companyAI" },
  { path: "/customerCase", component: "customerCase" },
  { path: "/juncYun", component: "juncYun" },
  { path: "/solution", component: "solution" },
]

const proxy = {
  // ----------- 请求本地，代理至服务端
  '/cloud_manage': {
      // target: 'http://192.168.2.184:9191/', 
      target: `http://192.168.8.146:9191`, 
      // target: 'http://localhost:9191/', 
      ws: false,
      changeOrigin: true
    },
  // ----------- 请求本地，代理至dvm文件服务
  '/dvm-upload': {
    target: 'http://192.168.8.145:8080/', 
    // target: 'http://localhost/',
    ws: false,
    changeOrigin: true
  },
}

export default defineConfig({
  routes,
  ssr: {},
  proxy
});
