function Solution({renderSolution}) {
    return (
        <div className='solution'>
        <h2 className='title'>Solución:</h2>
        <ul className='letters'>{renderSolution}</ul>
      </div>
    );
 }
export default Solution;