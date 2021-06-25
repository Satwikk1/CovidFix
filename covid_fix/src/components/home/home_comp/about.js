export const About = (props) => {
    return (
      <div id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-6'>
              {' '}
              <img src="https://base.imgix.net/files/base/ebm/ehstoday/image/2020/10/dreamstime_l_178479768.5f7cbeca40cc5.png?auto=format&fit=crop&h=432&w=768" className='img-responsive' alt='' />{' '}
              <img src="https://scm.ncsu.edu/wp-content/uploads/2021/01/India-COVID-vaccine-16x9-1-scaled.jpg" className='img-responsive' alt='' />{' '}
            </div>
            <div className='col-xs-12 col-md-6'>
              <div className='about-text'>
                <h2>About Covid-19</h2>
                <p>{props.data ? props.data.paragraph1 : 'loading...'}</p>
                <p>{props.data ? props.data.paragraph2 : 'loading...'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  