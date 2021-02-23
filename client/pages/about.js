import Layout from 'components/Layout';
import styles from 'styles/pages/about.module.css';

const About = () => {
  const handleContactSubmit = e => {
    e.preventDefault();
    const body = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    alert(JSON.stringify(body, null, 2));
  };

  return (
    <Layout>
      <section className={styles.aboutSection}>
        <h1>About</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          nesciunt facere eum! Possimus, esse odit eaque, corrupti ipsa aliquid
          architecto et asperiores itaque sunt iure, maxime obcaecati quaerat?
          Animi, veniam. Explicabo, maiores minus assumenda ut cumque cupiditate
          similique aspernatur laboriosam voluptas. Debitis iure magnam dolor
          optio modi odio rerum aliquam. Quam aliquid deserunt placeat totam
          exercitationem unde saepe, voluptate incidunt. Aliquid, commodi aut
          eligendi dolorum quia, illo amet porro iste maiores est rem esse
          tempora illum officiis asperiores! Voluptate officiis autem quas
          dolorem nobis distinctio magnam pariatur molestiae expedita! Nam?
          Aliquam cumque sunt ducimus nihil tenetur nemo obcaecati et commodi
          sequi quia velit laudantium, animi totam! Enim beatae porro
          laudantium, aut voluptatibus nisi sit nihil minima ducimus nobis, unde
          recusandae? Assumenda voluptas eos nesciunt fugiat fuga temporibus
          tenetur veritatis a distinctio necessitatibus, ullam sequi nihil,
          dolore ipsam esse. Recusandae natus quia corrupti quis hic velit
          suscipit, nemo illo blanditiis delectus.
        </p>
      </section>
      <section className={styles.contactSection}>
        <h1>Get In Touch</h1>
        <div className={`block`}>
          <form
            onSubmit={handleContactSubmit}
            name='contact'
            id='contact'
            className={styles.contactForm}
            method='post'
            autoComplete='on'>
            <label htmlFor='name'>Name: </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Enter your name'
              required
            />

            <label htmlFor='name'>Email: </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email address'
              required
            />

            <label htmlFor='message'>Message: </label>
            <textarea
              name='message'
              id='message'
              rows='5'
              placeholder='Enter your message'
              required></textarea>

            <button type='submit' className='btn'>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default About;
