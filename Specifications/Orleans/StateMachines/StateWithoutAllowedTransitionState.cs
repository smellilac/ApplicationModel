// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

using System.Collections.Immutable;

namespace Cratis.Kernel.Orleans.StateMachines;

public class StateWithoutAllowedTransitionState : BaseState
{
    protected override IImmutableList<Type> AllowedTransitions => ImmutableList<Type>.Empty;
}
