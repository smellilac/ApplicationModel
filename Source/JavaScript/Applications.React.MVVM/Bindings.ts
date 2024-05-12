// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { container } from 'tsyringe';
import { IMessenger, Messenger } from './messaging';
import { Constructor } from '@cratis/fundamentals';
import { ILocalStorage, INavigation, Navigation } from './browser';

export class Bindings {
    static initialize() {
        container.registerSingleton(IMessenger as Constructor<IMessenger>, Messenger);
        container.registerSingleton(INavigation as Constructor<INavigation>, Navigation);
        container.registerInstance(ILocalStorage as Constructor<ILocalStorage>, localStorage);
    }
}
