const { computeHeavyTask } = require('./stress');

describe('Stress Test for computeHeavyTask', () => {
    it('should handle heavy computation within a reasonable time', () => {
        const start = Date.now();
        const result = computeHeavyTask(1000);
        const end = Date.now();

        console.log('Computation result:', result);
        console.log('Time taken:', end - start, 'ms');

        expect(end - start).toBeLessThan(5000);
    });
});
