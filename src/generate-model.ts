import { DMMF as PrismaDMMF } from '@prisma/client/runtime/dmmf-types';
import assert from 'assert';
import {
    ClassDeclaration,
    Node,
    ObjectLiteralExpression,
    PropertyAssignment,
    SourceFile,
    StructureKind,
} from 'ts-morph';

import { generateClass } from './generate-class';
import { generateProperty } from './generate-property';

type GenerateModelArgs = {
    model: PrismaDMMF.Model;
    sourceFile: SourceFile;
    projectFilePath(data: { name: string; type: string }): string;
};

/**
 * Generate model (class).
 */
export function generateModel(args: GenerateModelArgs) {
    const { model, sourceFile, projectFilePath } = args;
    const classDeclaration = generateClass({
        decoratorName: 'ObjectType',
        sourceFile,
        name: model.name,
        properties: [{ name: 'description', value: model.documentation }],
    });

    model.fields
        .filter((field) => !field.isGenerated)
        .forEach((field) => {
            generateProperty({
                field,
                sourceFile,
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                classDeclaration: classDeclaration,
                className: model.name,
                projectFilePath,
                classType: 'model',
            });
        });
}