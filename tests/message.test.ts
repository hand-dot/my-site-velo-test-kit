import { test, expect, describe } from "vitest";
import { readAllMessages } from "../src/backend/message.js"

describe('message.js tests', () => {
    test('readAllMessages - should correctly read all messages', async () => {
        const messages = await readAllMessages();
        expect(Array.isArray(messages.items)).toBe(true);
        expect(messages.items.length).toBe(4);
        
        expect(messages.items[0]._id).toBe('1');
        expect(messages.items[0].message).toBe('Test1');
        expect(messages.items[1]._id).toBe('2');
        expect(messages.items[1].message).toBe('Test2');
        expect(messages.items[2]._id).toBe('3');
        expect(messages.items[2].message).toBe('Test3');
        expect(messages.items[3]._id).toBe('4');
        expect(messages.items[3].message).toBe('Test4');
    });
});