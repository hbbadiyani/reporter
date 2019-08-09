
import state from '../../state';

describe('state', () => {
    it('Should set SummarView to readonlyState', () => {
        const initialState = {
            Reports: [
                {
                    title: 'scan0',
                    accepted: 15,
                    assessed: 16,
                    executionTime: 51
                },
                {
                    title: 'scan1',
                    accepted: 15,
                    assessed: 16,
                    executionTime: 51
                }
            ]
        };

        const sut = state(initialState);
        expect(sut.Reports).toEqual(initialState.Reports);
    });
});
