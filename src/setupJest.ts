import 'jest-preset-angular/setup-jest';
import './polyfills';
import { ɵDomSharedStylesHost } from '@angular/platform-browser';
import { getTestBed } from '@angular/core/testing';

afterEach(() => {
    getTestBed().inject(ɵDomSharedStylesHost).ngOnDestroy();
});

const MockMutationObserver = class {
    constructor(private callback: any) {}
    disconnect() {
        this.callback();
    }
    observe(element: any, initObject: any) {
        this.callback(element, initObject);
    }
};

Object.defineProperty(window, 'MutationObserver', MockMutationObserver);
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});
