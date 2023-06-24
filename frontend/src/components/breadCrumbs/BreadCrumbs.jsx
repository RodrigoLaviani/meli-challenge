import './Breadcrumbs.scss';
import chevron from '../../shared/assets/chevron.svg';

const Breadcrumbs = ({ history }) => {
    const showBreadcrumbs = () => {
        const historyMock = ['Electrónica, audio y video', 'iPod', 'Reproducciones', 'iPod touch', '32 GB'];
        const isLastOne = (index) => historyMock.length === index + 1
        return historyMock.map((bc, index) => (
            <>
                <label className={`breacrumbs-page ${isLastOne(index) && 'breacrumbs-bold'}`}>{bc}</label>
                { !isLastOne(index) && <img className="breadcrumbs-separation-space" src={chevron} alt={'Flecha'}></img>}
            </>
        ))
    }

    return (
        <section className="breadcrumbs-container">
            <div className='breacrumbs'>
                {
                    showBreadcrumbs()
                }
            </div>
        </section>
    )
}

export default Breadcrumbs;