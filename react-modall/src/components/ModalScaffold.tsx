import { useState } from "react";
import { Modal } from "../lib";
import './style.scss';

/**
 * Composant ModalScaffold
 * @component
 *
 * @returns {JSX.Element} Composant ModalScaffold
 */
export const ModalScaffold = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button className="open-modal" onClick={openModal}>Open Modal</button>

            <Modal
                show={isModalOpen}
                close={closeModal}
                title="Custom Modal Title"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Unum nescio, quo modo possit, si luxuriosus sit, finitas cupiditates habere. Hoc est non modo cor non habere, sed ne palatum quidem. Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter. Paulum, cum regem Persem captum adduceret, eodem flumine invectio? Quid igitur dubitamus in tota eius natura quaerere quid sit effectum? Duo Reges: constructio interrete.
                "
            />
        </div>
    );
};
