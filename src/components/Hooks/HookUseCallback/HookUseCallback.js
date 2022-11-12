import './HookUseCallback.css'

export default function HookUseCallback() {
    return (
        <section id="usereducer" className='hook'>
            <h2 className="hook-title">useCallback</h2>

            <p className="hook-description">
                The <code className="highlight">useContext</code> <i>Hook</i> allows us to access the <code className="highlight">value</code> in this case <code className="highlight">&#123;green, setGreen, completedTasks&#125;</code> from the context provider. 
            </p>

            <div className="code-snippet"><code>
                <code className="purple">const &#123;</code>
                <code className="orange">green</code>,
                <code className="orange"> setGreen</code>,
                <code className="orange"> completedTasks</code>
                <code className="purple">&#125; </code>
                <code className="blue">= useContext</code>
                <code className="purple">(</code>GreenContext
                <code className="purple">)</code>
            </code></div>

            <div className="code-visualized">
                <div className="use-callback-hook">
                    <h2 className="visual-title">Click to pop the ballons</h2>

                    <div className="images">
                        visual
                    </div>

                    {/* <Button onClickScript={resetBallons} text={"Again!"} uniqueClass={`btn1-usereducer ${!allBallonsPopped && 'hides'}`}/> */}
                </div>
            </div>
        </section>
    )
}