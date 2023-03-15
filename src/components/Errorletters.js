function Errorletters({Errorletters}) {
    return (
        <div className='error'>
        <h2 className='title'>Letras falladas:</h2>
        <ul className='letters'>{Errorletters}</ul>
      </div>
    );
 }
export default Errorletters;