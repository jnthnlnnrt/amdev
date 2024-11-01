import './bootstrap';

//Flowbite
import 'flowbite';

document.addEventListener('livewire:navigated', () => {
    initFlowbite();
})