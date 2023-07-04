import { login } from '@/api' 
export default () => {
    return (
      <div>
        <p>关于我们</p>
        <button onClick={login}>点我发起请求</button>
      </div>
    );
};