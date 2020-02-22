import PostList from './PostList.vue';
import {shallowMount} from '@vue/test-utils';

let wrapper;

beforeEach(() =>
{
	// Mount only needed component
	wrapper = shallowMount(PostList, {
		propsData: {},
	});
});

describe('PostList component', () =>
{
	test('should be Vue instance', () =>
	{
		expect(wrapper.isVueInstance).toBeTruthy();
	});

	test('should be mounted with passed props', () =>
	{
		wrapper.setProps({
			posts: ['Post1', 'Post2', 'Post3']
		});
		expect(wrapper.vm.posts.length).toEqual(3);
	});
});

