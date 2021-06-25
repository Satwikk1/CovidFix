export const Symptoms = (props) => {
    return (
      <div id='symptoms' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Symptoms</h2>
            <p>
              If you are infected with COVID-19 virus then you might experience the following symptoms.
            </p>
            <hr style={{ backgroundColor: 'black' }} />
          </div>
          <div className='row'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-4'>
                    {' '}
                    <img src={d.photo} alt='...' className='symptom-img' />
                    <div className='symptom-desc'>
                      <h3>{d.name}</h3>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
          <div>
            <hr style={{ backgroundColor: 'black' }} />
            <p>
            Symptoms may begin one to fourteen days after exposure to the virus. At least a third of people who are infected do not develop noticeable symptoms. Of those people who develop noticeable symptoms enough to be classed as patients, most (81%) develop mild to moderate symptoms (up to mild pneumonia), while 14% develop severe symptoms (dyspnea, hypoxia, or more than 50% lung involvement on imaging), and 5% suffer critical symptoms (respiratory failure, shock, or multiorgan dysfunction). Older people are at a higher risk of developing severe symptoms. Some people continue to experience a range of effects (long COVID) for months after recovery, and damage to organs has been observed.
            </p>
          </div>
        </div>
      </div>
    )
  }
  