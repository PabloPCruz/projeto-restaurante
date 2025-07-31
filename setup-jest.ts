// import 'zone.js';
// import 'zone.js/testing';

// import { getTestBed } from '@angular/core/testing';
// import {
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting,
// } from '@angular/platform-browser-dynamic/testing';

// getTestBed().initTestEnvironment(
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting(),
//   {
//     teardown: { destroyAfterEach: true },
//   }
// );
// -------------------------------------------- // 
// import 'zone.js';
// import 'zone.js/testing';
// import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

// setupZoneTestEnv();
// ---------------------------------------------------- // 
import 'zone.js';
import 'zone.js/testing';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
  {
    teardown: { destroyAfterEach: true },
  }
);

