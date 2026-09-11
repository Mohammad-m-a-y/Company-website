import os
import uuid

class DynamicPath:
    def __init__(self, path_prefix):
        self.path_prefix = path_prefix

    def __call__(self, instance, filename):
        base_name = os.path.basename(filename)
        name, ext = os.path.splitext(base_name)
        final_name = f"{name}-{uuid.uuid4()}{ext.lower()}"
        return f"{self.path_prefix}/{final_name}"

     
    def deconstruct(self):
        return (
            'core.utils.file.DynamicPath', 
            [self.path_prefix],            
            {}                            
        )
