import NewPost from './NewPost.vue';
import {shallowMount} from '@vue/test-utils';

let wrapper;

beforeEach(() =>
{
	// Mount only needed component
	wrapper = shallowMount(NewPost, {
		propsData: {},
	});
});

describe('New Post component', () =>
{
	test('should be Vue instance', () =>
	{
		expect(wrapper.isVueInstance).toBeTruthy();
	});

	test('should be mounted with default props', () =>
	{
		expect(wrapper.vm.message).toEqual('');
	});

	test('should add post and clear message', () =>
	{
		wrapper.setData({message: 'New Post'});
		expect(wrapper.vm.message).toEqual('New Post');
		wrapper.vm.addPost();

		expect(wrapper.emitted().add[0]).toBeDefined();
		expect(wrapper.emitted().add[0]).toEqual(['New Post']);
		expect(wrapper.vm.message).toEqual('');
	});
});

