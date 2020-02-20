import App from './App.vue';
import {shallowMount} from '@vue/test-utils';

let wrapper;

beforeEach(() =>
{
	// Mount only needed component
	wrapper = shallowMount(App, {
		propsData: {},
	});
});

describe('Sections component', () =>
{
	test('should be Vue instance', () =>
	{
		expect(wrapper.isVueInstance).toBeTruthy();
	});
});

