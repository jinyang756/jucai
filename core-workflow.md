核心工作流： 
 您在本地使用 VS Code 编辑 wp/wp-content/themes/your-custom-theme/ 下的主题文件，或者在 wp/wp-content/plugins/ 下添加/修改插件。 
 
 您在本地通过 Git 命令将这些代码提交到您的 Git 仓库（如 GitHub）。 
 
 Vercel 检测到 Git 仓库的更新，自动拉取代码。 
 
 Vercel 根据 vercel.json 的配置，构建项目，并将 api/index.php 和 wp/ 目录下的相关文件打包成 Serverless Functions。 
 
 Vercel 部署这些函数到其全球边缘网络。 
 
 用户访问您的 jiuzhougroup.vip 域名时，请求被路由到 Vercel 的边缘节点，由 Serverless Functions 处理，并连接到您的外部数据库（如 TiDB Cloud/PlanetScale）获取内容。