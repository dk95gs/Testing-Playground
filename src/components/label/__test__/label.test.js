import React from 'react';
import ReactDOM from 'react-dom';
import Label from '../Label';
import {render, cleanup} from '@testing-library/react';
import reactTestRender from 'react-test-renderer';

import "@testing-library/jest-dom/extend-expect";


afterEach(cleanup);