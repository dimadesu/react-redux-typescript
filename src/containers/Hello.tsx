import { Action } from 'redux-actions';
import Hello from '../components/Hello';
import * as actions from '../actions/enthusiasm';
import { StoreState, EnthusiasmState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps(
    state: StoreState
) {
    return {
        enthusiasmLevel: state.enthusiasm.enthusiasmLevel,
        name: state.enthusiasm.languageName,
    };
}

export function mapDispatchToProps(
    dispatch: Dispatch<Action<EnthusiasmState>>
) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
