import React, { useEffect } from 'react';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { render } from '@testing-library/react';
import pilotsState from './atoms/pilots';

const DummyApp = ({ children }) => {
  const setPilots = useSetRecoilState(pilotsState);
  useEffect(() => {
    setPilots([{
      Id: 1,
      Callsign: 'A',
      ImageUrl: 'A',
      Plane: 'A'
    }, {
      Id: 2,
      Callsign: 'B',
      ImageUrl: 'B',
      Plane: 'B'
    }]);
  }, []);
  return children;
}

const AllProviders = ({ children }) => (
  <RecoilRoot>
    <DummyApp>
      {children}
    </DummyApp>
  </RecoilRoot>
);

const customRender = (ui, options) => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
