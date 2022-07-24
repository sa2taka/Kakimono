import { RecoilRoot } from 'recoil';
import { styleThemeClass } from './components/ThemeStyle/space.css';
import { className } from './components/utils/className';
import { Main } from './windows/Main';

export const App: React.FC = () => {
  return (
    <RecoilRoot>
      <div className={className('App', styleThemeClass)}>
        <Main />
      </div>
    </RecoilRoot>
  );
};
