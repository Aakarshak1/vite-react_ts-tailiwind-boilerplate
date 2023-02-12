import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';

//extends vitest's expect methods with methods from RTL
expect.extend(matchers);

//runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
