import Post from './Post.vue';
import {shallowMount} from '@vue/test-utils';

let wrapper;

beforeEach(() =>
{
	// Mount only needed component
	wrapper = shallowMount(Post, {
		propsData: {},
	});
});

describe('Post component', () =>
{
	test('should be Vue instance', () =>
	{
		expect(wrapper.isVueInstance).toBeTruthy();
	});

	test('should be mounted with passed props', () =>
	{
		wrapper.setProps({
			value: 'Post'
		});
		expect(wrapper.vm.value).toEqual('Post');
	});

	test('should produce html with passed value', () =>
	{
		wrapper = shallowMount(Post, {
			propsData: {
				value: 'Post'
			},
		});
		expect(wrapper.text()).toEqual('Post');
	});
});

