type Optional<T> = { 
    [K in keyof T]?: T[K];
};

export { Optional as default };
