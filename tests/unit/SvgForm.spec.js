// Test the visibility of components based on selected shapes

import SvgForm from '@/components/SvgForm/SvgForm.vue';

import { mount } from '@vue/test-utils';

console.log(SvgForm);

describe('SvgForm', () => {
	// Test Circle Form
	test('If Circle is not selected, hide the circle-form', () => {
		const wrapper = mount(SvgForm);
		expect(wrapper.find('.circle-form').isVisible()).toBe(false);
	});

	test('If Circle is selected, show the circle-form component', async () => {
		const wrapper = mount(SvgForm);
		wrapper.setData({ selectedShape: 'Circle' });

		await wrapper.vm.$nextTick();
		expect(wrapper.find('.circle-form').isVisible()).toBe(true);
	});

	// Test Square Formm
	test('If Square is not selected, hide the square-form', () => {
		const wrapper = mount(SvgForm);
		expect(wrapper.find('.square-form').isVisible()).toBe(false);
	});

	test('If Square is selected, show the Square-form component', async () => {
		const wrapper = mount(SvgForm);
		wrapper.setData({ selectedShape: 'Square' });

		await wrapper.vm.$nextTick();
		expect(wrapper.find('.square-form').isVisible()).toBe(true);
	});

	// Test Rectangle Form
	test('If Rectangle is not selected, hide the rectangle-form', () => {
		const wrapper = mount(SvgForm);
		expect(wrapper.find('.rectangle-form').isVisible()).toBe(false);
	});

	test('If Rectangle is selected, show the rectangle-form component', async () => {
		const wrapper = mount(SvgForm);
		wrapper.setData({ selectedShape: 'Rectangle' });

		await wrapper.vm.$nextTick();
		expect(wrapper.find('.rectangle-form').isVisible()).toBe(true);
	});
});
