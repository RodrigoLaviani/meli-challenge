import './Container.scss';

const Container = ({ children }) => (
    <section className="container">
        <div className="box">
            {children}
        </div>
    </section>
);

export default Container;