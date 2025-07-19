from flask import Flask, render_template

# 创建 Flask 应用实例
app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/')
def index():
    """
    首页路由，渲染主页面 index.html
    """
    return render_template('index.html')

if __name__ == '__main__':
    # 启动 Flask 开发服务器
    app.run(debug=True) 