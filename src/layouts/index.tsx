import { Link, Outlet } from 'umi';
import styles from './index.less';

const HomeHeader = () => {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/solution">解决方案</Link>
        </li>
        <li>
          <Link to="/companyAI">企业数智化</Link>
        </li>
        <li>
          <Link to="/juncYun">云极商城</Link>
        </li>
        <li>
          <Link to="/customerCase">客户案例</Link>
        </li>
        <li>
          <Link to="/aboutUs">关于我们</Link>
        </li>
      </ul>
    </div>
  );
}

const HomeFooter = () => {
  return (<div>
    hello, i am home footer
  </div>)
}

export default function Layout() {
  return (<>
    <HomeHeader />
    <Outlet />
    <HomeFooter />
  </>);
}
